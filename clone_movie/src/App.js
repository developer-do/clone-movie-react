import React, { Component } from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

const foodILike = [
  {
    name: '김치',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.crowdpic.net%2Fdetail-thumb%2Fthumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg&imgrefurl=https%3A%2F%2Fwww.crowdpic.net%2Fphoto%2F%25EA%25B9%2580%25EC%25B9%2598-%25EB%25B0%25B0%25EC%25B6%2594%25EA%25B9%2580%25EC%25B9%2598-%25EA%25B9%2580%25EC%259E%25A5-%25ED%2595%259C%25EA%25B5%25AD%25EC%259D%258C%25EC%258B%259D-%25EC%259A%2594%25EB%25A6%25AC-284908&tbnid=LHNsh0rFzdrG6M&vet=12ahUKEwjIxd2m5qnqAhXJEKYKHTEFCQgQMygCegUIARDXAg..i&docid=E4_RjbuyfxAHoM&w=975&h=650&q=%EA%B9%80%EC%B9%98&ved=2ahUKEwjIxd2m5qnqAhXJEKYKHTEFCQgQMygCegUIARDXAg',
  },
  {
    name: '삼겹살',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.kr.news.samsung.com%2Fkr%2Fwp-content%2Fuploads%2F2017%2F03%2F%25ED%2591%25B8%25EB%2593%259C%25ED%258F%25AC%25EC%25BB%25A4%25EC%258A%25A44%25ED%258E%25B804.jpg&imgrefurl=https%3A%2F%2Fnews.samsung.com%2Fkr%2F%25EC%259D%25B8%25EA%25B0%2584%25EC%2582%25AC-%25ED%259D%25AC%25EB%25A1%259C%25EC%2595%25A0%25EB%259D%25BD-%25EA%25B0%2580%25EB%25A7%258C%25EA%25B0%2580%25EB%25A7%258C-%25ED%2595%25A8%25EA%25BB%2598%25ED%2595%25B4%25EC%2598%25A8-%25EC%2584%259C%25EB%25AF%25BC-%25EC%259D%258C%25EC%258B%259D&tbnid=DEbcu5XhCFdMSM&vet=12ahUKEwihgves5qnqAhWczIsBHeOuC4cQMygIegUIARDNAg..i&docid=LW5hMTk98OeEhM&w=849&h=560&q=%EC%82%BC%EA%B2%B9%EC%82%B4&ved=2ahUKEwihgves5qnqAhWczIsBHeOuC4cQMygIegUIARDNAg',
  },
  {
    name: '비빔밥',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F44%2FDolsot-bibimbap.jpg&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EB%25B9%2584%25EB%25B9%2594%25EB%25B0%25A5&tbnid=QhFN1PI4Gi3m0M&vet=12ahUKEwibn-e85qnqAhUTx4sBHaQ0D4MQMygAegUIARDAAg..i&docid=LLx6Fq5KFqTvRM&w=6748&h=4503&q=%EB%B9%84%EB%B9%94%EB%B0%A5&ved=2ahUKEwibn-e85qnqAhUTx4sBHaQ0D4MQMygAegUIARDAAg',
  },
  {
    name: '돈가스',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpost-phinf.pstatic.net%2FMjAyMDA0MTZfMjY3%2FMDAxNTg2OTk5MzYwOTMw.YZk3XJCkJqOrZmSzXTGfnXcfoj5CoLQfY9kEBhBmlyYg.WdEgjt1SmPLlCfi8nmVMB79FymTDi3ApEfQJrGF57Acg.JPEG%2F1.jpg%3Ftype%3Dw1200&imgrefurl=https%3A%2F%2Fm.post.naver.com%2Fviewer%2FpostView.nhn%3FvolumeNo%3D28004866%26memberNo%3D3600238&tbnid=GJ5h3yaL2i2E5M&vet=12ahUKEwjio5fE5qnqAhWRAKYKHczUDxYQMygAegUIARDHAQ..i&docid=w6M3Bb2BqI7gqM&w=700&h=485&q=%EB%8F%88%EA%B0%80%EC%8A%A4&ved=2ahUKEwjio5fE5qnqAhWRAKYKHczUDxYQMygAegUIARDHAQ',
  },
  {
    name: '김밥',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2017%2F07%2F27%2Faa6a94c863535af15b6a7512af579d6b1.jpg&imgrefurl=https%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6873542&tbnid=6xGYC2I3AjsSFM&vet=12ahUKEwiMg63O5qnqAhVIyZQKHb5KAfwQMygAegUIARCxAg..i&docid=GZ4ObhdZI0Qi7M&w=900&h=600&q=%EA%B9%80%EB%B0%A5&ved=2ahUKEwiMg63O5qnqAhVIyZQKHb5KAfwQMygAegUIARCxAg',
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        
        
      </div>
    );
  }
}

export default App;
