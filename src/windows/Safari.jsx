import { experiences } from "#constants";
import WindowsWrapper from "#hoc/WindowsWrapper";
import { WindowControls } from "#layouts";
import {
  PanelLeft,
  ChevronRight,
  ChevronLeft,
  Share,
  Copy,
  ShieldHalf,
  Search,
  Plus,
  MoveRight,
  Check,
} from "lucide-react";
const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target={"safari"} />
        <PanelLeft className="ml-10 icon" />
        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter webiste name"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <div className="blog">
        <h2>Experience on Campus</h2>
        <div className="space-y-8">
          {experiences.map(({ id, image, date, contribution }) => (
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <img src={image} alt="UPNVJ Logo" />
              </div>
              <div className="content">
                <p>{date}</p>
                <ul>
                  {contribution.map(({ description, link }, id) => (
                    <div key={id}>
                      <li className="flex gap-2">
                        <Check className="check" size={20} />
                        {description}
                        <a href={link} target="_blank" rel="noopener noreffer">
                          Visit <MoveRight className="icon-hover" size={20} />
                        </a>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const SafariWindow = WindowsWrapper(Safari, "safari");
export default SafariWindow;
