<template>
  <div>
    <el-upload
      v-if="type === 'url'"
      :action="upload.url"
      :before-upload="handleBeforeUpload"
      :on-success="handleUploadSuccess"
      :on-error="handleUploadError"
      class="editor-img-uploader"
      name="file"
      :show-file-list="false"
      :headers="upload.headers"
    >
      <i ref="uploadRef"></i>
    </el-upload>
  </div>
  <div class="editor">
    <quill-editor
      ref="quillEditorRef"
      v-model:content="content"
      content-type="html"
      :options="options"
      :style="styles"
      @text-change="(e: any) => $emit('update:modelValue', content)"
    />
  </div>
</template>

<script setup lang="ts">
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import { QuillEditor, Quill } from '@vueup/vue-quill';
import { propTypes } from '@/utils/propTypes';
import { globalHeaders } from '@/utils/request';
import { useI18n } from 'vue-i18n';
import { getCurrentInstance, ref, reactive, computed, watch, toRaw, onMounted } from 'vue';
import type { ComponentInternalInstance } from 'vue';

const { t } = useI18n();

defineEmits(['update:modelValue']);

const props = defineProps({
  /* 编辑器的内容 */
  modelValue: propTypes.string,
  /* 高度 */
  height: propTypes.number.def(400),
  /* 最小高度 */
  minHeight: propTypes.number.def(400),
  /* 只读 */
  readOnly: propTypes.bool.def(false),
  /* 上传文件大小限制(MB) */
  fileSize: propTypes.number.def(5),
  /* 类型（base64格式、url格式） */
  type: propTypes.string.def('url')
});

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const upload = reactive<UploadOption>({
  headers: globalHeaders(),
  url: import.meta.env.VITE_APP_BASE_API + '/resource/oss/upload'
});
const quillEditorRef = ref();
const uploadRef = ref<HTMLDivElement>();

const options = ref<any>({
  theme: 'snow',
  bounds: document.body,
  debug: 'warn',
  modules: {
    // 工具栏配置
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
        ['blockquote', 'code-block'], // 引用  代码块
        [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
        [{ indent: '-1' }, { indent: '+1' }], // 缩进
        [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
        [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
        [{ align: [] }], // 对齐方式
        ['clean'], // 清除文本格式
        ['link', 'image', 'video'] // 链接、图片、视频
      ],
      handlers: {
        image: (value: boolean) => {
          if (value) {
            // 调用element图片上传
            uploadRef.value.click();
          } else {
            Quill.format('image', true);
          }
        }
      }
    }
  },
  placeholder: t('common.editor.placeholder'),
  readOnly: props.readOnly
});

const styles = computed(() => {
  let style: any = {};
  if (props.minHeight) {
    style.minHeight = `${props.minHeight}px`;
  }
  if (props.height) {
    style.height = `${props.height}px`;
  }
  return style;
});

const content = ref('');
watch(
  () => props.modelValue,
  (v: string) => {
    if (v !== content.value) {
      content.value = v || '<p></p>';
    }
  },
  { immediate: true }
);

// 图片上传成功返回图片地址
const handleUploadSuccess = (res: any) => {
  // 如果上传成功
  if (res.code === 200) {
    // 获取富文本实例
    let quill = toRaw(quillEditorRef.value).getQuill();
    // 获取光标位置
    let length = quill.selection.savedRange.index;
    // 插入图片，res为服务器返回的图片链接地址
    quill.insertEmbed(length, 'image', res.data.url);
    // 调整光标到最后
    quill.setSelection(length + 1);
    proxy?.$modal.closeLoading();
  } else {
    proxy?.$modal.msgError(t('common.editor.imageInsertFailed'));
    proxy?.$modal.closeLoading();
  }
};

// 图片上传前拦截
const handleBeforeUpload = (file: any) => {
  const type = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg'];
  const isJPG = type.includes(file.type);
  //检验文件格式
  if (!isJPG) {
    proxy?.$modal.msgError(t('common.editor.imageFormatError'));
    return false;
  }
  // 校检文件大小
  if (props.fileSize) {
    const isLt = file.size / 1024 / 1024 < props.fileSize;
    if (!isLt) {
      proxy?.$modal.msgError(t('common.editor.imageSizeError', { size: props.fileSize }));
      return false;
    }
  }
  proxy?.$modal.loading(t('common.editor.uploadingFile'));
  return true;
};

// 图片失败拦截
const handleUploadError = (err: any) => {
  proxy?.$modal.msgError(t('common.editor.uploadFailed'));
};

// 设置CSS变量以支持国际化
onMounted(() => {
  const root = document.documentElement;
  root.style.setProperty('--editor-link-address', `"${t('common.editor.linkAddress')}"`);
  root.style.setProperty('--editor-save', `"${t('common.editor.save')}"`);
  root.style.setProperty('--editor-video-address', `"${t('common.editor.videoAddress')}"`);
  root.style.setProperty('--editor-text', `"${t('common.editor.text')}"`);
  root.style.setProperty('--editor-title1', `"${t('common.editor.title1')}"`);
  root.style.setProperty('--editor-title2', `"${t('common.editor.title2')}"`);
  root.style.setProperty('--editor-title3', `"${t('common.editor.title3')}"`);
  root.style.setProperty('--editor-title4', `"${t('common.editor.title4')}"`);
  root.style.setProperty('--editor-title5', `"${t('common.editor.title5')}"`);
  root.style.setProperty('--editor-title6', `"${t('common.editor.title6')}"`);
  root.style.setProperty('--editor-standardFont', `"${t('common.editor.standardFont')}"`);
  root.style.setProperty('--editor-serifFont', `"${t('common.editor.serifFont')}"`);
  root.style.setProperty('--editor-monospaceFont', `"${t('common.editor.monospaceFont')}"`);
});
</script>

<style>
.editor-img-uploader {
  display: none;
}
.editor,
.ql-toolbar {
  white-space: pre-wrap !important;
  line-height: normal !important;
}
.quill-img {
  display: none;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
  content: var(--editor-link-address, '请输入链接地址:');
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0;
  content: var(--editor-save, '保存');
  padding-right: 0;
}
.ql-snow .ql-tooltip[data-mode='video']::before {
  content: var(--editor-video-address, '请输入视频地址:');
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: '14px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
  content: '10px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
  content: '18px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
  content: '32px';
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: var(--editor-text, '文本');
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
  content: var(--editor-title1, '标题1');
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
  content: var(--editor-title2, '标题2');
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
  content: var(--editor-title3, '标题3');
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
  content: var(--editor-title4, '标题4');
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
  content: var(--editor-title5, '标题5');
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
  content: var(--editor-title6, '标题6');
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: var(--editor-standardFont, '标准字体');
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
  content: var(--editor-serifFont, '衬线字体');
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
  content: var(--editor-monospaceFont, '等宽字体');
}
</style>
