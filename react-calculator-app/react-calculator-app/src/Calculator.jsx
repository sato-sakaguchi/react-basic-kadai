export function Calculator() {
    // ボタンの配置を表す配列
    const buttons = [
        "7","8","9","/",
        "4","5","6","*",
        "1","2","3","-",
        "0","C","=","+"
    ];

    const buttonList = buttons.map((btn) => (
        <button key={btn}>{btn}</button>
    ));

    return (
        <div className="calculator-container">
            <h2>電卓アプリ</h2>
            {/* 表示欄（ダミーで０を表示） */}
            <div className="display">0</div>
            {/* ボタンエリア */}
            <div className="button-grid">
                {buttonList}
            </div>
        </div>
    );
}