import { useEffect, useState } from 'react'
import './Connect.css'
import Button from '../components/Button'

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

export default function Connect() {
    // todo - Kaikas 지갑이 설치 되지 않았을 경우, 체크하는 로직을 넣어 정상적으로 연결되지 않음이라는 메세지가 렌더링 되도록 수정
    const { klaytn } = window;
    const isKlaytnInstalled = klaytn.isKaikas;
    let status = isKlaytnInstalled ? <span className="green">설치됨</span> : <span className="red">설치 안됨</span> 
    const [publicKey, setPublicKey] = useState("");
    const [network, setNetwork] = useState("");

    useEffect(() => {
        console.log("useEffect network");
        if(klaytn.selectedAddress) { // Klaytn 에 연결되었을 경우
            setNetwork(getNetworkName(klaytn.networkVersion));
        }
    },[klaytn.selectedAddress, klaytn.networkVersion]);

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
                        지갑 네트워크 : { network }
                    </li>
                </ul>
            </div>
            <div className="connectPage__btnbar">
                <Button 
                    name="연동" 
                    onConnect={()=>connectTo(isKlaytnInstalled, setPublicKey)} />
            </div>
        </div>
    )
}