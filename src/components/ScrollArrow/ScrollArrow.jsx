import { ChevronDown } from "lucide-react";

export function ScrollArrow() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
      <div className="text-center mt-7">
        <button
            onClick ={scrollToBottom}
            className="transition-transform duration-300 hover:scale-125"
        >
            <ChevronDown size ={60} color="#8B8378"/>   
        </button>
      </div>
    );
  }