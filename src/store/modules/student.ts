import { fetchStudentList } from "@/api/student";

interface StudentItem {
  currentStudent: string;
  studentId: string;
  studentName: string;
}

interface State {
  studentList: StudentItem[];
}

const useStudentStore = defineStore("student", () => {
  const state: State = reactive({
    studentList: [],
  });

  const currentStudent = computed(() => {
    const currentStudentItem = state.studentList.find((item) => item.currentStudent === "1");
    return (
      currentStudentItem || {
        studentName: "",
        studentId: "",
      }
    );
  });

  const updateStudentList = async () => {
    try {
      const res = await fetchStudentList();
      if (Array.isArray(res)) {
        state.studentList = res;
        return Promise.resolve(res);
      }
      return Promise.resolve([]);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    ...toRefs(state),
    currentStudent,
    updateStudentList,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStudentStore, import.meta.hot));
}

export default useStudentStore;
