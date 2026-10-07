import "./Emoji.css"

type EMOJI_KEYS_ = "happy" | "sick" | "dead";
const EMOJI_MAP = new Map<string,
string>([
    ["happy", "😊"],
    ["sick", "🤮"],
    ["dead", "😵"]
]);

export default function Emoji(){
    return (
    <div className="emoji">
        {EMOJI_MAP.get("happy")}
    </div>
    );
}
