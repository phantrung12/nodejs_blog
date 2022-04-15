import "./header.css"

export default function header() {
    return (
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitleSm"></span>
                    <span className="headerTitleLg">BLOG LINH TINH</span>
                </div>
                <img 
                    className="headerImg"
                    src="https://data.1freewallpapers.com/download/microsoft-surface-landscape-4k.jpg"
                   alt=""
                />
            </div>
    )
}
