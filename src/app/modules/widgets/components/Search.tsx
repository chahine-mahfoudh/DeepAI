import { RiSearchLine } from "react-icons/ri";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import "./search.css";
import { useState, useEffect } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
} from "reactstrap";
import { toast } from "react-toastify";
function Search() {
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
  return (
    <div className="w-100">
      <div className="d-flex flex-column justify-content-start align-items-center   flex-wrap gap-5  ">
        <div className="h4 fw-semibold">The AI search engine for LAW</div>
        <div className="d-flex flex-column gap-3 w-100">
          <div className="shadow bg-body rounded">
            <InputGroup>
              <Input
                rows={1}
                type="textarea"
                placeholder={animatedText}
                onKeyDown={handleTextareaKeyDown}
                style={{ resize: "vertical" }}
              />
              <InputGroupText className="cursor-pointer">
                <RiSearchLine />
              </InputGroupText>
            </InputGroup>
          </div>
          <div className="d-flex justify-content-evenly gap-3 flex-wrap w-100 m-2">
            
            <FormGroup switch>
              <Input type="switch" role="switch" />
              <Label check> Tunis</Label>
            </FormGroup>
            <div>|</div>
            <FormGroup switch>
              <Input type="switch" role="switch" />
              <Label check> France</Label>
            </FormGroup>
          </div>
        </div>
        
          <div>
            <h3 className="fw-semibold">Explore Trending topics</h3>
            {suggestion.map((s, i) => (
              <p dir="auto">
                <div
                  className={`bg-${
                    bootstrapBgColors[i % bootstrapBgColors.length]
                  }  p-2 rounded-3`}
                >
                  {s}
                </div>
              </p>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Search;
