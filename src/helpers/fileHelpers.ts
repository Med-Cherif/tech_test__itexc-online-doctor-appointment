export default function handleFileChange(file: File) {
  return {
    file,
    url: URL.createObjectURL(file),
  };
}
