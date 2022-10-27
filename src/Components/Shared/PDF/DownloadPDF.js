import { jsPDF } from "jspdf";

export const downloadPDF = (
  name,
  tutor,
  courseImage,
  toalVideos,
  price,
) => {
  const doc = new jsPDF("p", "mm", "a4");

  // const width = doc.internal.pageSize.getWidth();
  // const height = doc.internal.pageSize.getHeight();

  doc.text(`${name}`, 10, 10); <br />
  doc.addImage(`${courseImage}`, "PNG", 10, 20, 150, 100); <br />
  doc.text(`Tutor : ${tutor}`, 10, 140); <br />
  doc.text(`Total videos : ${toalVideos}`, 10, 150); <br />
  doc.text(`Price : ${price}`, 10, 160); <br />
  doc.save(`${name}.pdf`)
};

// export default DownloadPDF;
