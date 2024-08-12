import "../styles/WinRate.css"
import LossFairy from "../../public/LossFairy.svg"
import WinFairy from "../../public/WinFairy.svg"

const WinRate=()=>{
    const monthlyGone = 10;
    const winTime=4;
    const name="야구 빠순이";
    const Winner=" 승리요정";
    const Loser=" 패배요정";
    let decimalValue = winTime/monthlyGone

// 첫 번째, 두 번째, 세 번째 소수점 자릿수를 추출하고 1자리수 자연수로 변환
    let firstDecimalPlace = Math.round((decimalValue * 10) % 10);
    
    const value= winTime/monthlyGone*100

    return (
        <div className="WinRate">
            <div className="Header"> 

            </div>
            <div className="underPart">
                <div className="Countings">
                    <div className="upper">
                        <div className="MonthlyGone">
                            <div className="a">
                                한달 경기 간 횟수
                                </div>
                            <div className="b">
                                {monthlyGone}번
                                </div>
                        </div>
                        <div className="MontlyWin">
                            <div className="a">이긴 횟수</div>
                            <div className="b">{winTime}번</div>
                        </div>
                    </div>
                    <div className="Rate">
                        <div className="c">나의 현재 직관 승률</div>
                        <div className="d">{firstDecimalPlace}할</div>
                    </div>
                </div>

                <div >
                    <div className="RU">이번달 나는 승리요정?</div>
                    <div className="WinFairy">
                        <img className="img" src={(winTime/monthlyGone>0.6)?WinFairy:LossFairy}></img>
                        <div className="contents">{(winTime/monthlyGone>0.6)
                        ? <>{name} 님은 <div className="highlight">{ Winner}</div> 입니다</>
                        : <>{name} 님은 <div className="highlight">{ Loser}</div> 입니다</>}</div>
                        <div className="Percent">
                            <div className="gauge-label">현재 나의 승률</div>
                            <div className="gauge-value">{value}%</div>
                            <div className="gauge-bar">
                                <div
                                className="gauge-fill"
                                style={{ width: `${value}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="underBar">

            </div>
        </div>
    )
}

export default WinRate  