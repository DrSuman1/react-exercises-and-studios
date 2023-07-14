export default function HobbyLinks(){
    let pageTitle = "My Hobbies";
    let HobbyLinks = ["https://en.wikipedia.org/wiki/Art", "https://en.wikipedia.org/wiki/Animation", "https://en.wikipedia.org/wiki/Meditation"]
    return (
        <div>
            <h3>{pageTitle}</h3>
            <a href = {HobbyLinks[0]}>"Art"</a>
            <a href = {HobbyLinks[1]}>"Animation"</a>
            <a href = {HobbyLinks[2]}>"Meditation"</a>
        </div>
    );
};