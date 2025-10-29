import JSEncrypt from "jsencrypt";

const PUBLIC_KEY =
  "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnXnrmnWtxXQLC9i4CluYFlD0Nv55VM392dzQwLT23E7MYX63Af2nie2iY0uyDYWlXkqs8Z78TWLhv1gLjghGUsYffszKZ8Uoxxm4oGrN5NVANUa50u2xoVQPrquoEazHxfVs8zbKakVcvRbPvonSP0mOzhbnJBn6XNeGMwbS2fMsQR9vBA7zew4lXJR6aOcx3Z8ofll6XQ5q3mEzViNWpFhZjzpYGg7z8lXkeR3X6sXxLE1MDHh/IkV/g5g9AkzJ0Ea+MQuhANFMiAKJZ0vxxIJiIf/I8WoXbjOv0+atatgjI0AoC/quwR3bD2rNNdMCD13seY54UaUVcXXrlJOq2QIDAQAB";

// 加密
export function rsaEncrypt(word: string) {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(PUBLIC_KEY);
  const encrypted = encrypt.encrypt(word);
  return encrypted;
}
