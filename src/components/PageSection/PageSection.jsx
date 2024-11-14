import styled from "styled-components";
import { Link } from 'react-router-dom';
import './PageSection.css';

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;

const ColumnRight = styled.div`
    padding: 0 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }

    img {
        width: 100%;
        height: 70%;
        object-fit: cover;
        box-shadow: 0 0 20px 10px #565656;

        @media screen and (max-width: 768px) {
            width: 100%;
            height: 90%;
        }
    }
`;

export default function PageSection({ section }) {
    return (
        <section className="page-section">
            <div className="section-container">
                <ColumnLeft reverse={section.reverse}>
                    <h1>{section.heading}</h1>
                    <p>{section.parOne}</p>
                    <p>{section.parTwo}</p>
                    {section.parThree && <p>{section.parThree}</p>}
                    {section.parFour && <p>{section.parFour}</p>}
                    {section.parFive && <p>{section.parFive}</p>}
                    {section.path && (section.inscope ?
                        <Link to={section.path} className='button' style={{ maxWidth: "160px" }}>{section.label}</Link> :
                        <a href={section.path} className='button' style={{ maxWidth: "160px" }} rel="noopener noreferrer" target="_blank">{section.label}</a>
                    )}
                </ColumnLeft>
                <ColumnRight reverse={section.reverse}>
                    <img src={section.image} alt={section.alt} />
                </ColumnRight>
            </div>
        </section>
    )
}
