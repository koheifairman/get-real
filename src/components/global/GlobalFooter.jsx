import Image from "next/image";

import { copyright, icons } from "@/datas/global/globalFooter";

const GlobalFooter = () => {
  return (
    <div className="global-footer">
      <div className="global-footer-container">
        <div className="copyright">{copyright}</div>
        <div className="icon-list">
          {icons.map((iconArg) => {
            return (
              <div key={iconArg.id} className="list-item">
                <div className="icon-circle">
                  <Image
                    src={iconArg.src}
                    alt={iconArg.label}
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .global-footer {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
        }
        .global-footer-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .copyright {
          color: #575757;
          font-family: "Robot";
        }
        .icon-list {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 15px;
          align-items: center;
        }
        .list-item {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .list-item:hover {
          cursor: pointer;
        }
        .icon-circle {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #383d38;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};
export default GlobalFooter;

GlobalFooter.displayName = "../components/GlobalFooter";
