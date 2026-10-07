import "./Emoji.css"

type EMOJI_KEYS = "happy" | "sick" | "dead";
const EMOJI_MAP = new Map<string,
string>([
    ["happy", "😊"],
    ["sick", "🤮"],
    ["dead", "😵"]
]);

function happyClick(){
    console.log("Status: ", status);
    console.log("Happy!!");
    status = "happy";
    console.log("Status: ", status);
}
export default function Emoji() {
    let status: EMOJI_KEYS = "sick";
    return (
        <>
    <div className="emoji">
        {EMOJI_MAP.get("sick")||"😵‍💫"}
    </div>
    <div className="acoes">
        <button onClick={happyClick}>Happy</
        button>
    </div>
    </>
    );
}
