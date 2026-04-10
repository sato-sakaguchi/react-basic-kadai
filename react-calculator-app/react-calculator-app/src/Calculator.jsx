import { useState } from "react";

export function Calculator() {
    // memo:修正：[]（配列の分割代入）/ {}（オブジェクトの分割代入）
    // displayという名前の状態変数を定義（初期値は空文字）
    const [display, setDisplay] = useState("");

    // 教材コピペ：ボタンの配置を表す配列（記述順に表示）
    const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
    ];

    // 正規表現を用いて「整数 演算子 整数」の形式をチェックする
    const calculate = (expression) => {
        // 「整数 演算子 整数」の形式のみ許可
        const validExpression = /^(\d+)([+\-*/])(\d+)$/;
        // 有効な式であるかチェック
        const match = expression.match(validExpression);
        if (!match){
            // 形式に合わない場合はエラー
            throw new Error("無効な式です")
        }

        // データの取得
        const num1 = Number(match[1]);   // 1つ目の整数
        const operator = match[2];       // 演算子
        const num2 = Number(match[3]);   // 2つ目の整数

        // 演算子の内容に沿って計算を行い、結果を返却
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                // 0除算の考慮（エラーハンドリング）
                return num2 !== 0 ? num1 / num2 : "エラー";
            default:
                return "エラー";
        }
    };

    // displayを更新するイベントハンドラ
    const handleClick = (btn) => {
        if (btn === "C") {
            // クリアボタン：表示欄を’’にクリア
            setDisplay("");
        } else if (btn === "=") {
            // イコールボタン：計算を実行
            try{
                const result = calculate(display);
                setDisplay(String(result));
            } catch (error) {
                // 計算失敗時は「エラー」を設定
                setDisplay("エラー");
            }
        } else {
            if (display === "エラー") {
                // 「エラー」表示中に何か押されたら、一旦リセットして新しい入力を開始
                setDisplay(btn);
            } else{
                // 数字や演算子：そのボタン名（+、1など）をdisplayの末尾に追加する。
                setDisplay(display + btn);
            } 
        }
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