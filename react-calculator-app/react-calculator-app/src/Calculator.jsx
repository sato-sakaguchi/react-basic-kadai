import { useState } from "react";

export function Calculator() {
    // memo:修正：[]（配列の分割代入）/ {}（オブジェクトの分割代入）
    // displayという名前の状態変数を定義（初期値は空文字）
    const [display, setDisplay] = useState("");

    // ボタンの配置を表す配列（記述順に表示）
    const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
    ];

    // 定義のみ
    const handleClick = (btn) => {

    };

    return (
        <div className="calculator-container">
            <h2>電卓アプリ</h2>
            {/* displayをdiv要素に埋め込む。displayが空の場合は0とする。 */}
            <div className="display">{display === "" ? "0" : display}</div>
            {/* ボタンの定義 */}
            <div className="button-grid">
                {buttons.map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                ))}
            </div>
        </div>
    );
}