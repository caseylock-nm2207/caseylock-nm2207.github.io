function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};

function getResult() {
    let total = 0;
    let q1 = document.querySelector('input[name="question1"]:checked').value;
    let q2 = document.querySelector('input[name="question2"]:checked').value;
    let q3 = document.querySelector('input[name="question3"]:checked').value;
    let q4 = document.querySelector('input[name="question4"]:checked').value;
    let q5 = document.querySelector('input[name="question5"]:checked').value;
    let q6 = document.querySelector('input[name="question6"]:checked').value;
    let q7 = document.querySelector('input[name="question7"]:checked').value;
    let q8 = document.querySelector('input[name="question8"]:checked').value;
    let q9 = document.querySelector('input[name="question9"]:checked').value;
    let q10 = document.querySelector('input[name="question10"]:checked').value;
    
    total = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10);
    console.log(total);

    if (total > 0) {
        document.getElementById("result").innerHTML = "You are a dog person."
     }
     else if (total < 0) {
         document.getElementById("result").innerHTML = "You are a cat person."
     }
     else {
         document.getElementById("result").innerHTML = "You are both a cat and dog person."
     }
}

//source = https://codepen.io/plotly/pen/EVrRxR
Plotly.d3.csv('https://raw.githubusercontent.com/caseylock-nm2207/caseylock-nm2207.github.io/main/petsdata.csv', function (err, rows) {
    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }

    let data = [{
        type: 'choropleth',
        locations: unpack(rows, 'code'),
        z: unpack(rows, 'dogowner'),
        text: unpack(rows, 'country'),
        colorscale: [[0, 'rgb(5, 10, 172)'], [0.35, 'rgb(40, 60, 190)'], [0.5, 'rgb(70, 100, 245)'], [0.6, 'rgb(90, 120, 245)'], [0.7, 'rgb(106, 137, 247)'], [1, 'rgb(220, 220, 220)']],
        autocolorscale: false,
        reversescale: true,
        marker: {
            line: {
                color: 'rgb(180,180,180)',
                width: 0.5
            }
        },
        tick0: 0,
        zmin: 0,
        dtick: 1000,
        colorbar: {
            autotic: false,
            title: '% of Dog Owners'
        }
    }];

    let layout = {
        title: 'Dog Owners Internationally',
        width: 700,
        height: 400,
        geo: {
            showframe: false,
            showcoastlines: false,
            projection: {
                type: 'mercator'
            }
        }
    };
    Plotly.plot(mapgraph, data, layout, { showLink: false });
});

Plotly.d3.csv('https://raw.githubusercontent.com/caseylock-nm2207/caseylock-nm2207.github.io/main/petsdata.csv', function (err, rows) {
    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }

    let data = [{
        type: 'choropleth',
        locations: unpack(rows, 'code'),
        z: unpack(rows, 'catowner'),
        text: unpack(rows, 'country'),
        colorscale: [[0, 'rgb(5, 10, 172)'], [0.35, 'rgb(40, 60, 190)'], [0.5, 'rgb(70, 100, 245)'], [0.6, 'rgb(90, 120, 245)'], [0.7, 'rgb(106, 137, 247)'], [1, 'rgb(220, 220, 220)']],
        autocolorscale: false,
        reversescale: true,
        marker: {
            line: {
                color: 'rgb(180,180,180)',
                width: 0.5
            }
        },
        tick0: 0,
        zmin: 0,
        dtick: 1000,
        colorbar: {
            autotic: false,
            title: '% of Cat Owners'
        }
    }];

    let layout = {
        title: 'Cat Owners Internationally',
        width: 700,
        height: 400,
        geo: {
            showframe: false,
            showcoastlines: false,
            projection: {
                type: 'mercator'
            }
        }
    };
    Plotly.plot(mapgraph2, data, layout, { showLink: false });
});

const wellbeing = ['Depression', 'Loneliness','Self-Esteem','Physical Illness and Symptoms','Subjective Happiness','Exercise and Fitness']
const owner = [30.00, 38.64, 34.27, 3.98, 5.20, 4.40]
const nonowner = [31.72, 41.64, 32.21, 4.21, 5.06, 3.94]

const dataObj = {
  labels: wellbeing,
  datasets: [
    {
      label: 'Pet Owners',
      data: owner,
      borderColor: "rgb(255, 225, 156)",
      backgroundColor: "rgb(255, 225, 156)",
    },
    {
      label: 'Non Pet Owners',
      data: nonowner,
      borderColor: "rgb(255, 231, 189)",
      backgroundColor: "rgb(255, 231, 189)",
    }
  ],
}

new Chart("bargraph",
    {
        type: "bar",
        data: dataObj,
        options: { 
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: ['Pet Owners vs Non Pet Owners'],
                    font: {
                        size: 20,   
                        family: 'Gill Sans',
                    },
                    color: 'rgb(255,255,255)',
                },
                legend: {
                    display: true,
                    labels: {
                        color: 'white',
                        font : {
                            family: 'Gill Sans',

                            size: 15,
                        }
                    },
                },
            },
            scales: {
                y: {
                    ticks: {
                        color: "white",
                        font: {
                            size: 10,
                            family: 'Gill Sans',
                        },
                    }
                },
                x: {
                    ticks: {
                        color: "white",
                        font: {
                            size: 14,
                            family: 'Gill Sans',
                        },
                    }
                }
            }
        }
    }
);

const personality = ['Openness', 'Agreeableness', 'Conscientiousness', 'Extraversion', 'Neuroticism'];

const dataObj2 = {
  labels: personality,
  datasets: [
    {
      label: 'Cat Owners',
      data: [3.70, 3.70, 3.75, 2.44, 3.09],
      borderColor: "rgba(96, 128, 104, 0.6)",
      backgroundColor: "rgba(96, 128, 104, 0.6)",
    },
    {
        label: 'Dog Owners',
        data: [3.65, 3.92, 4.02, 2.72, 2.64],
        borderColor: "rgba(62, 89, 68, 0.6)",
        backgroundColor: "rgba(62, 89, 68, 0.6)",
      }
  ]
};

new Chart("petradar",
    {
        type: "radar",
        data: dataObj2,
        options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Cat Owners',
                fontSize: 14,
                fontFamily: 'Gill Sans'
              }
            }
          },
    }
);
