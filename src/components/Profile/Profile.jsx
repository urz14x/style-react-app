import "./style.css";
export default function Profile() {
  return (
    <div className="song-container">
      <img
        className="song-img"
        src="https://th.bing.com/th/id/R.d062b42520ebe001cc55a7f40f84735f?rik=UjoE8fGTRfYpPA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-WBfj_5IF3v8%2fTaPXtBJtliI%2fAAAAAAAAAkU%2f8EkbieuE7sM%2fs200%2fscientist%2bcd.jpg&ehk=zzcoK5T7RY0c9dmvzsXr7qnIHiAxjVK1qxv%2bqlxcQzI%3d&risl=&pid=ImgRaw&r=0"
        alt="song"
      />
      <div className="song-data" style={{ color: "#f7f7fe" }}>
        <h4>The Scientist</h4>
        <h5>Coldplay · 5:11</h5>
      </div>
      <svg
      style={{color: "#f7f7fe"}}
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-player-play"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 4v16l13 -8z"></path>
      </svg>
    </div>
  );
}
