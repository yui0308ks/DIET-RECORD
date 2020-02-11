  ////////////////////////////////////////////////////////////
  // window.draw_graph = -> 
  function draw_graph() {

    ctx = document.getElementById("sportsChart").getContext('2d')
    sportsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: graphsdays, // ここは日付が表示される X軸に当たる
            datasets: [{
                label: '体重',
                data: graphweights, // ここは時間が表示される Y軸に当たる
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    })};
    //////////////////////////////////////////////////////////// 

window.addEventListener("load", function() {
    //折れ線グラフ2
  var ctx = document.getElementById("myLine2Chart");

  // 20200209追記
  var array_date = [];
  var helth_weight = [];

  var dates = new Date();
  

  var year = dates.getFullYear();
  var month = dates.getMonth()+1;
  var day = dates.getDate();

  for(i=0;i<5;i++){
    // array_date.push(year+"年"+month+"月"+(day + i)+"日");
    array_date.push($('.arr_json').val());
    helth_weight.push(50 + i);
  }

  // 20200209追記

  var sportsChart = new Chart(ctx, {
    //グラフの種類
    type: 'line',
    //データの設定
    // 

    data: {
        //データ項目のラベル
        // labels: ["1月", "2月", "3月", "4月", "5月",1,1,1,1],
        labels: array_date,
        //データセット
        datasets: [
            {
                //凡例
                label: graphdays,
                //面の表示
                fill: false,
                //線のカーブ
                lineTension: 0,
                //背景色
                backgroundColor: "rgba(179,181,198,0.2)",
                //枠線の色
                borderColor: "rgba(179,181,198,1)",
                //結合点の枠線の色
                pointBorderColor: "rgba(179,181,198,1)",
                //結合点の背景色
                pointBackgroundColor: "#fff",
                //結合点のサイズ
                pointRadius: 5,
                //結合点のサイズ（ホバーしたとき）
                pointHoverRadius: 8,
                //結合点の背景色（ホバーしたとき）
                pointHoverBackgroundColor: "rgba(179,181,198,1)",
                //結合点の枠線の色（ホバーしたとき）
                pointHoverBorderColor: "rgba(220,220,220,1)",
                //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
                pointHitRadius: 15,
                //グラフのデータ
                // data: [12, 19, 3, 5, 2,4,5,6,4]
                data: graphweights
            },
        ]
    },
    //オプションの設定
    options: {
        //軸の設定
        scales: {
            //縦軸の設定
            yAxes: [{
                //目盛りの設定
                ticks: {
                    //最小値を0にする
                    beginAtZero: true
                }
            }]
        },
        //ホバーの設定
        hover: {
            //ホバー時の動作（single, label, dataset）
            mode: 'single'
        }
    }
  });
});