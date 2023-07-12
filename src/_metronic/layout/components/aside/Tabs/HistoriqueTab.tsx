import {Link} from 'react-router-dom'
import {KTIcon} from '../../../../helpers'
import { RiSearchLine } from "react-icons/ri";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
} from "reactstrap";
import { toast } from "react-toastify";

function HistoriqueTab() {
  const [animatedText, setAnimatedText] = useState("");
  const suggestion = [
    "Qui est exonéré des frais de timbre ?",
    "Quel est le montant du SMIC en Tunisie ?",
    "من كتب دستور تونس 1959؟",
    "Amendes Finances tunisie, combien?",
  ];
  const bootstrapBgColors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  const placeholderText = "Ask anything here to our AI and it will answear you  ...";
  const typingSpeed = 150;

  function handleTextareaKeyDown(event: { target: any; }) {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % (placeholderText.length + 1);
      setAnimatedText(placeholderText.slice(0, currentIndex));
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [placeholderText, typingSpeed]);

return(
  <div className="w-100">
      <div className="d-flex flex-column justify-content-start align-items-center   flex-wrap gap-5  ">
        <div className="d-flex flex-column gap-3 w-100">
          <div className="d-flex justify-content-evenly gap-3 flex-wrap w-100 m-2">
            <FormGroup switch>
              <Input type="switch" role="switch" />
              <Label check> Arab</Label>
            </FormGroup>
            <div>|</div>
            <FormGroup switch>
              <Input type="switch" role="switch" />
              <Label check> Français</Label>
            </FormGroup>
            
          </div>
        </div>
        <div className="w-100 d-flex  flex-wrap justify-content-evenly gap-3 text-center">
          <div className="card shadow rounded-4">
            <div className="card-header">
              <div className="card-title"></div>
              <h3 className="fw-semibold fs-2">Historique</h3>
            </div>
            <div className="card-body">
              {suggestion.map((s) => (
                <div className="bg-info text-start p-2 border cursor-pointer">
                  <BsFillChatLeftTextFill /> <span dir="auto">{s}</span>
                  
                </div>
              ))}
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between">
                <div className="cursor-pointer" onClick={() => { 
                  toast.info('Your history is cleared!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                }}>Clear</div>
                <div className="cursor-pointer">View All</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
export {HistoriqueTab}
