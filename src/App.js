import './App.css';
import hero from './img/hero01.png';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  rank: string,
  reward: string,
  condition: string,
) {
  return { rank, reward, condition };
}

const rows = [
  createData('1', "400 만원상당의 USDT", "최소 거래량 50,000 USDT"),
  createData('2', "200 만원상당의 USDT", "최소 거래량 50,000 USDT"),
  createData('3', "100 만원상당의 USDT", "최소 거래량 50,000 USDT"),
  createData('4', "25 만원상당의 USDT", "최소 거래량 20,000 USDT"),
  createData('5', "25 만원상당의 USDT", "최소 거래량 20,000 USDT"),
  createData('6', "10 만원상당의 USDT", "최소 거래량 20,000 USDT"),
  createData('7', "10 만원상당의 USDT", "최소 거래량 20,000 USDT"),
  createData('8', "10 만원상당의 USDT", "최소 거래량 20,000 USDT"),
  createData('9', "10 만원상당의 USDT", "최소 거래량 20,000 USDT"),
  createData('10', "10 만원상당의 USDT", "최소 거래량 20,000 USDT"),
];

const MyButton = styled(Button)({
  backgroundColor: '#9EE05A',
  color: "#fff",
  '&:hover': {
    backgroundColor: '#fff',
    color: "#9EE05A"
  }
})

function App() {
  return (
    <div className="app">
      <header>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,400;8..144,500;8..144,700&display=swap');
        </style>
      </header>
      
        <Grid container className="content">
          <Grid item xs={12}><img className="hero" src={hero}/></Grid>
          <Grid item xs={10} lg={8}>
            <h1>PlayV Run Season 2</h1> 
            <h3 style={{marginBottom:"0px"}}>Win Up To 60,000 USDT</h3>
            <h5 style={{color:"#fff", margin: "10px 0 50px 0", textAlign: "center"}}>디지털 자산 소셜 트레이딩 플랫폼 PlayV에서, ‘PlayV Run 시즌2’의 개막을 알립니다. <br/>
            총 3회에 걸친 대규모 트레이딩 대회 ‘PlayV Run 시즌2’에 참여하시고 총 상금 60,000 USDT에 달하는 상금을 획득하세요!</h5>
            
            <h4>상금 및 혜택</h4>
            <h5>트레이더</h5>
            <p>투자 전략을 세우고, 트레이딩을 통하여 당신의 실력을 증명하고 상금을 획득하세요.</p>
              <ul>
                  <li>총 상금 60,000 USDT</li>
                  <li>거래 수수료 50% 페이백</li>
                  <li>얼리버드 혜택 300 USDT 증정</li>
                  <li>입상자 SNS 홍보 및 마케팅 매니지먼트</li>
              </ul>

              <h5>인베스터</h5>
              <p>응원하는 트레이더의 전략을 구매하고 트레이더와 수익을 공유하세요.</p>
              <p>이벤트 전략 구매금의 20% 페이백 제공</p>
             
              
              <h4>대회 일정</h4>
              <h5>1회차</h5>
              <h6><em>신청 기간(12일):</em> 2022년 8월 18일 15:00 ~ 2022년 8월 29일 15:00 (UTC +9)</h6>
              <h6><em>대회 기간(21일):</em> 2022년 8월 29일 15:00 ~ 2022년 9월 19일 15:00 (UTC +9)</h6>

              <h5>2회차</h5>
              <p>{<LockIcon />} Coming Soon</p>

              <h5>3회차</h5>
              <p>{<LockIcon />} Coming Soon</p>

              
              <h4>순위 결정</h4>
              <p>각 전략은 “ROI(Return On Investment)”라 표기되는 수익률에 따라 순위가 매겨집니다. 수익률이 동률일 경우, 거래량이 높은 도전자가 상위 순위에 들어갑니다.</p>
              <p>랭킹 보드는 매일 17 시 경 업데이트 되며,  최종 랭킹보드는 <em>2022년 9월 20일 17시에 업로드됩니다.</em></p>
              <Grid item xs={4} className="button">
                <MyButton variant="contained" href="https://www.notion.so/PlayV-Run-Season-2-Ranking-Board-9dc30de9150f4815bcb0d704ed04c6b3">랭킹보드 바로가기</MyButton>
              </Grid>

              
              <h4>상금획득 및 참여방법 - 트레이더</h4>
              <p>참여 및 상금 획득을 위해, Level 2 Authentication(SMS & Google OTP)를 반드시 완료하여야 합니다.</p>
              
              <h5>회차 대회 순위 상금</h5>
              <p></p>
              
              <Grid xs={12} lg={8} style={{margin: "10px 0 15px 0"}}>
                <TableContainer component={Paper} style={{background:"rgba(255,255,255, 0.9)"}}className="mytb">
                  <Table style={{tableLayout:"fixed" }} >
                    <TableHead>
                      <TableRow>
                        <TableCell >Rank</TableCell>
                        <TableCell >Reward</TableCell>
                        <TableCell >Condition</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.rank}>
                          <TableCell >{row.rank}</TableCell>
                          <TableCell >{row.reward}</TableCell>
                          <TableCell >{row.condition}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                </Table>
              </TableContainer>
              </Grid>

              <ol>
                <li>순위권 입상자 10 명 거래 수수료 50% 페이백</li>
                <li>순위권 (1~3 등) 입상자 SNS 홍보 및 마케팅 매니지먼트</li>
              </ol>
              <p>신청 기간 내 트레이더 등록 및 전략 생성하고, 전략구매금 300 USDT 이상 유치 해야 참여가 가능합니다</p>
              <p>트레이더 본인 전략 구매 가능합니다.</p>

              <h5>트레이더 상세 규정</h5>
              <ul>
                <li>각 트레이더는 모집 기간 동안 하나의 USDT 전략을 생성합니다.<br/>
                * Base Currency: USDT 클릭 (BTC 전략은 참여 불가)</li>
                <li><em>전략 제목(Strategy Name)은 참여 코드(PVR_)</em>를 포함한 영문으로 작성해야 합니다. (예:PVR_Major Coin Only)</li>
                <li>전략 세부사항(Strategy Detail)또한 <em>영어로 작성해야 하며</em> 영어로 작성되지 않거나 대회 참여 코드가 작성되지 않은 전략은 대회에 등록되지 않을 수 있습니다.</li>
                <li>올바르게 생성된 전략은 생성 후 1  영업일 이내에 “Event”탭에 업로드 되며,  본 대회시작 전에는 전략에 투자금을 보유하고 있어도 트레이딩을 할 수 없습니다.</li>
                <li>생성한 전략은 수익률에 따라 순위가 집계되며 매일 한번 업데이트되는 랭킹 보드에서 자신의 순위와 예상 상금 금액 확인이 가능합니다.</li>
                <li>트레이더는 대회가 종료될 때까지 유치한 자산을 관리합니다.  인베스터가 없는 트레이더의 경우에는 본인의 전략을 대회 시작 전까지 구매하여야 참가 가능합니다. <br/> 
대회 시작 전까지 전략구매금(Total Asset) 300USDT  미보유시 대회 참여가 제한됩니다.</li>
              </ul>

              
              <h4>상금획득 및 참여방법 - 인베스터</h4>
              <p>참여 및 상금 획득을 위해, Level 2 Authentication(SMS & Google OTP)를 반드시 완료하여야 합니다.</p>
              <h5>인베스터 이벤트 혜택</h5>
              <p>선착순 50 명에게 EVENT 전략 순 구매금의 20%를 페이백 해드립니다.</p>
              
              <h5>인베스터 상세 규정</h5>
              <ul>
                <li>인베스터는 최소 50 USDT 로 선호하는 전략을 구매해야 합니다.</li>
                <li>인베스터는 대회 <em>시작부터 종료까지 전략 구매에 사용된 자산을 유지</em>시켜야 상금을 받을 수 있습니다. 전략 구매금을 출금할 경우 참여 대상에서 제외됩니다.</li>
              </ul>
              
              <h5>이벤트 참여 주의사항</h5>
              <ol>
                <li>EVENT 전략 순 구매금: 이벤트 종료 시점까지 구매한 ‘EVENT”탭 전략들의 (‘총 구매금’-’총 판매금’)의 합.
                  <ul>
                    <li><em>EVENT 전략 순 구매금</em>은 50 USDT 이상이어야 합니다.</li>
                    <li><em>EVENT 탭의 전략</em>을 구매해야 이벤트 참여가 인정됩니다.</li>
                  </ul>
                </li>
                <li>페이백은 대회 종료 후 지급되며, 단순 입금된 자산은 이벤트 참여에 해당되지 않습니다.</li>
                <li>페이백은 인베스터 당 최대 200 USDT 지급됩니다.</li>
                <li>인베스터의 첫 전략 구매건이 선착순 50 명 안에 들면, 이후 대회 기간 중 구매한 전략의 나머지 구매금액도 모두 전략 순 구매금 총 합산에 포함되어 20% 페이백을 받을 수 있습니다.
                  <ul>
                    <li>8월 18일(모집기간)내 전략 50 USDT 구매 + 9 월 5 일(대회 중) 650 USDT 추가 구매 = 전략 구매금 총합   : 700 USDT   </li>
                    <li>최종 에어드랍: 700 USDT X 20% = 140 USDT</li>
                  </ul>
                </li>

              </ol>
                

              <h5>인베스터</h5>
              <p>선착순 50명, EVENT 전략 순 구매금의 20% 페이백(Max. 200USDT)</p>
              
              <h6>주의사항:</h6>
              <p>Authentication Level 2(휴대폰 번호 + Google OTP 인증) 완료된 인베스터에 한하여 지급</p>
              <p><em>EVENT 전략 순 구매금:</em> 이벤트 종료 시점까지 구매한 ‘EVENT”탭 전략들의 ‘총 구매금 - 총 판매금’의 합</p>
              <p>전략 순 구매금은 50U 이상이어야 함</p>
              <p>“EVENT”탭의 트레이더 전략을 구매해야 이벤트 참여 인정</p>
              
              <h6>인베스터 상세 규정</h6>
              <ul>
                <li>인베스터는 최소 50 USDT로 선호하는 전략을 구매해야 합니다.</li>
                <li>인베스터는 대회 시작부터 종료까지 전략 구매에 사용된 자산을 유지시켜야 상금을 받을 수 있습니다. 운용 자산을 출금할 경우 참여 대상에서 제외됩니다.</li>
                <li>인베스터 및 트레이더는 모든 이벤트와 대회에 참여하기 위해서 계정의 Level 2 Authentication을 완료하여야 합니다.</li>
              </ul>

              
              <h4>순위 결정</h4>
              <p>각 전략은 “ROI(Return On Investment)”라 표기되는 수익률에 따라 순위가 매겨집니다. 수익률이 동률일 경우, 거래량이 높은 도전자가 상위 순위에 들어갑니다. 
랭킹 보드는 매일 17시 경 업데이트 되며, 최종 랭킹보드는 2022년 9월 20일 17시에 업로드됩니다.</p>
              <ul>
                <li>1~3위 최소 거래량 50,000 USDT 달성 시 상금 수령 가능</li>
                <li>4~10위 최소 거래량 20,000 USDT 달성 시 상금 수령 가능</li>
              </ul>
              <Grid item xs={4} className="button">
                <MyButton variant="contained" href="https://playv.co/?utm_source=UBB2&utm_medium=UBB2&utm_id=UBB2">지금 참여하기</MyButton>
              </Grid>
          </Grid>
        </Grid>
      
    </div>
  );
}

export default App;
