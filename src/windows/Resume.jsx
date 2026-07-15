import WindowsWrapper from "#hoc/WindowsWrapper";
import { WindowControls } from "#layouts";
import { Download } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className="curosr-pointer"
          title="Download resume"
        >
          <Download className="icon-hover" />
        </a>
      </div>
      <Document file="files/resume.pdf">
        <div style={{ display: "flex", gap: "20px" }}>
          {" "}
          <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
          <Page pageNumber={2} renderTextLayer renderAnnotationLayer />
        </div>
      </Document>
    </>
  );
};
const ResumeWindow = WindowsWrapper(Resume, "resume");
export default ResumeWindow;
