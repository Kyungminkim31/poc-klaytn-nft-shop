import { useEffect, useState } from 'react'
import './connect.css'

async function connectTo(isKlaytnInstalled, setPublicKey) {
    if(!isKlaytnInstalled) {
        return 
    } 
    const accounts = await window.klaytn.enable();
    setPublicKey(accounts[0]);
}

const getNetworkName = code => {
    switch (code) {
        case 1001 :
            return 'Baobab Network';
        case 8217 :
            return 'Main Network';
        default:
            return 'Unknown Network';
    }
};

export default function Connect(){
    const { klaytn } = window;
    const isKlaytnInstalled = typeof klaytn !== 'undefined';
    const status = isKlaytnInstalled ? <span className="green">설치됨</span> : <span className="red">설치 안됨</span> 
    const [publicKey, setPublicKey] = useState("");
    const [network, setNetwork] = useState("");
    
    return (
        <div className="connectPage">
            <div className="connectPage__title">
                <h1>Connect</h1>
            </div>
            <div className="connectPage__subtitle"> 
                Kaikas 지갑 연결 정보
            </div>
            <div className="connectPage__content">
                <ul>
                    <li>
                        Kaikas 지갑 설치여부 :&nbsp; { status }
                    </li>
                    <li>
                        지갑 주소 (공개키): { publicKey }
                    </li>
                    <li>
                        지갑 네트워크 : {network}
                    </li>
                </ul>
            </div>
            <div className="connectPage__btnbar">
                <button onClick={() => connectTo(status, setPublicKey)}>지갑 연동하기</button>
            </div>
        </div>
    )
}