import './App.css';
import hero from './img/hero01.png';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MyButton = styled(Button)({
  backgroundColor: '#9EE05A',
  color: "#000",
  '&:hover': {
    backgroundColor: '#000',
    color: "#fff"
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
          <Grid item xs={8}>
            <h1>PlayV Run Season 2</h1> 
            <h3>Win Up To 60,000 USDT</h3>
            <h5 style={{color:"#fff", marginTop: "30px", textAlign: "center"}}>디지털 자산 소셜 트레이딩 플랫폼 PlayV에서, ‘PlayV Run 시즌2’의 개막을 알립니다. <br/>
            총 3회에 걸친 대규모 트레이딩 대회 ‘PlayV Run 시즌2’에 참여하시고 총 상금 60,000 USDT에 달하는 상금을 획득하세요!</h5>
            <hr/>
            <h4>상금 및 혜택</h4>
            <h5>트레이더</h5>
            <p>투자 전략을 세우고, 트레이딩을 통하여 당신의 실력을 증명하고 상금을 획득하세요.</p>
              <ul>
                  <li>총 상금 60,000 USDT</li>
                  <li>거래 수수료 50% 페이백</li>
                  <li>얼리버드 혜택 300 USDT 증정</li>
                  <li>입상자 SNS 홍보 및 마케팅 매니지먼트</li>
              </ul>

              <h5>트레이더(인플루언서) 혜택</h5>
              <h6><em>혜택1.</em> 상위 트레이더(인플루언서) 전략 구매 (300 USDT)</h6>
              <p>1차 대회: 10명</p>
              <p>2차 대회: 20명</p>
              <p>3차 대회: 10명</p>

              <h5>대상 기준</h5>
              <ol>
                <li>커뮤니티 풀 크기 (자체 채널 내 인베스터 및 트레이더 영입 능력 우선 순위)</li>
                <li>트레이딩 실력</li>
                <li>자신의 채널에 대회 홍보 가능한 인플루언서</li>
              </ol>

              <h6><em>혜택2.</em> NBA 5% 페이백 제공</h6>
              <p>유치 인베스터 자산에 따라 페이백 5% 제공</p>
              <ul>
                <li>Max. 1,000 USDT 지급 (Max. 페이백 달성 기준: NBA 20,000 USDT)</li>
                <li>Level 2 Authentication 완료 시 참여 가</li>
              </ul>

              <h5>인베스터</h5>
              <p>응원하는 트레이더의 전략을 구매하고 트레이더와 수익을 공유하세요.</p>
              <p>이벤트 전략 구매금의 20% 페이백 제공</p>
              <ol>
                <li>참여대상: 전략 구매 선착순 50 명, Max. 200 USDT/인</li>
                <li>대회 종료 후 지급</li>
                <li>조건: 이벤트 기간 끝날 때까지 개인 인베스터의 NBA 유지</li>
                <li>단순 디파짓 된 자산은 해당되지 않음 <br/>
                예: 인베스터 전략 구매액 700USDT, 단순 보유자산 600USDT일 경우 <br/>
                추가 에어드랍 = 700*20% = 140 USDT <br/>
                * Level 2 Authentication 완료 시 참여 가능
                </li>
              </ol>

              <hr />
              <h4>대회 일정</h4>
              <h5>제 1회</h5>
              <h6><em>신청 기간(14일):</em> 트레이더: 트레이더 등록 및 전략 생성 / 인베스터: 전략 구매 가능 </h6>
              <p>2022년 8월 18일 15:00 ~ 2022년 8월 29일 15:00 (UTC +9)</p>
              <h6><em>추가 신청 기간(7일):</em> 트레이더: 트레이더 등록 및 전략 생성 / 인베스터: 전략 구매 가능</h6>
              <p>2022년 8월 29일 15:00 ~ 2022년 9월 4일 15:00 (UTC +9)</p>
              <h6><em>트레이딩 대회 기간(21일):</em> 트레이더: 트레이딩 시작 / 인베스터: 전략 구매 가능</h6>
              <p>2022년 8월 29일 15:00 ~ 2022년 9월 19일 15:00 (UTC +9)</p>

              <h5>2회차</h5>
              <p>{<LockIcon />} Coming Soon</p>

              <h5>3회차</h5>
              <p>{<LockIcon />}Coming Soon</p>

              <hr />
              <h4>참가 및 상금 획득방법</h4>
              <h5>트레이더</h5>
              <p>신청 기간 내 트레이더 등록 및 전략 생성, 전략구매금 300U 이상 유치<br/>
              *트레이더 본인 전략 구매 가능</p>

              <h6>주의 사항:</h6>
              <p>Authentication Level 2(휴대폰 번호 + Google OTP 인증) 필수</p>
              <p>전략 생성 시 전략 이름(Strategy Name)앞에 대회 참여코드(PVR_) 필수 기입</p>
              <p>전략 이름(Strategy Name)과 세부 사항(Strategy Detail) 영어로 표기</p>
              <p>전략 표준 통화(Base Currency) USDT 설정</p>
              
              <h6>트레이더 상세 규정</h6>
              <ul>
                <li>각 트레이더는 모집 기간 동안 하나의 USDT 전략을 생성합니다.</li>
                <li>생성한 전략은 수익률에 따라 순위가 집계되며 랭킹 보드에서 자신의 순위와 잠재적으로 수령 가능한 상금 확인이 가능합니다.</li>
                <li>트레이더는 대회가 종료될 때까지 유치된 자산을 관리합니다. 인베스터가 없는 트레이더의 경우에는 본인의 전략을 대회 시작 전까지 구매하여야 참가 가능합니다. (300usdt, 대회 시작 전까지 미보유시 “EVENT”페이지에서 내려감)</li>
                <li>전략 세부사항은 영어로 작성해야 하며 대회 참여 코드를 올바르게 작성해야 합니다. 영어로 작성되지 않거나 대회 참여 코드가 작성되지 않은 전략은 대회에 등록되지 않을 수 있습니다.</li>
                <li>올바르게 생성된 전략은 생성 후 1 영업일 이내에 “Event”탭에 업로드 되며, 본 대회시작 전에는 전략에 투자금을 보유하고 있어도 트레이딩을 할 수 없습니다.
사전 연습 목적의 경우 대회 참여 전략이 아닌 다른 전략을 생성하고 본인이 구매하여 연습 가능</li>
                <li>인베스터 및 트레이더는 모든 이벤트와 대회에 참여하기 위해서 계정의 Level 2 Authentication을 완료하여야 합니다.</li>
              </ul>

              <h5>인베스터</h5>
              <p>선착순 50명, EVENT 전략 순 구매금의 20% 페이백(Max. 200U)</p>
              
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

              <hr />
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
