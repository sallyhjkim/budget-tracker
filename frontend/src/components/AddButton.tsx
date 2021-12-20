import React from "react";

import "./addButton.scss";

interface AddButtonProps {}

const AddButton: React.FC<AddButtonProps> = () => {
    return (
        <div className="addButtonContainer">
            <svg
                t="1639984497365"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2154"
                width="32"
                height="32"
            >
                <path
                    d="M576 64H448v384H64v128h384v384h128V576h384V448H576z"
                    fill="#262626"
                    p-id="2155"
                ></path>
            </svg>
        </div>
    );
};

export default AddButton;
