import React, { useState } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';

const Card = (props) => {
    const [saved, setSaved] = useState(false);

    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src={props.brandLogo} alt="" />

                    <button
                        onClick={() => setSaved(!saved)}
                        className={saved ? "saved-btn" : ""}
                    >
                        {saved ? (
                            <>
                                Saved <BookmarkCheck size={12} />
                            </>
                        ) : (
                            <>
                                Save <Bookmark size={12} />
                            </>
                        )}
                    </button>
                </div>

                <div className="center">
                    <h3>
                        {props.companyName}
                        <span>{props.datePosted}</span>
                    </h3>

                    <h2>{props.post}</h2>

                    <div className="tag">
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>

                <a
                    href={props.apply}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>Apply Now</button>
                </a>
            </div>
        </div>
    );
};

export default Card;