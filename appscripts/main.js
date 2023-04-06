function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

let acc = document.getElementsByClassName("accordion");
let i;
  
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
}
  
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

    total =
        parseInt(q1) +
        parseInt(q2) +
        parseInt(q3) +
        parseInt(q4) +
        parseInt(q5) +
        parseInt(q6) +
        parseInt(q7) +
        parseInt(q8) +
        parseInt(q9) +
        parseInt(q10);
    console.log(total);

    if (total > 0) {
        document.getElementById("result").innerHTML =
        "You are a dog person. The results show that you are an extrovert and research have shown that people who exhibit extroverted traits get along better with dogs.";
    } else if (total < 0) {
        document.getElementById("result").innerHTML =
        "You are a cat person. The results show that you are an introvert and research have shown that people who exhibit introverted traits get along better with cats.";
    } else {
        document.getElementById("result").innerHTML =
        "You are both a cat and dog person. The results show that you are an ambivert. Research have shown that people who exhibit extroverted traits get along better with dogs, and those who exhibit introverted traits get along better with cat. As someone who exhibits both traits, you will get along well with both animals!";
    }
}

function refreshTest() {
    document.querySelector('input[name="question1"]:checked').checked = false;
    document.querySelector('input[name="question2"]:checked').checked = false;;
    document.querySelector('input[name="question3"]:checked').checked = false;;
    document.querySelector('input[name="question4"]:checked').checked = false;;
    document.querySelector('input[name="question5"]:checked').checked = false;;
    document.querySelector('input[name="question6"]:checked').checked = false;;
    document.querySelector('input[name="question7"]:checked').checked = false;;
    document.querySelector('input[name="question8"]:checked').checked = false;;
    document.querySelector('input[name="question9"]:checked').checked = false;;
    document.querySelector('input[name="question10"]:checked').checked = false;;
}

//source = https://codepen.io/plotly/pen/EVrRxR
Plotly.d3.csv(
"https://raw.githubusercontent.com/caseylock-nm2207/caseylock-nm2207.github.io/main/resources/petsdata.csv",
function (err, rows) {
    function unpack(rows, key) {
    return rows.map(function (row) {
        return row[key];
    });
    }

    let data = [
    {
        type: "choropleth",
        locations: unpack(rows, "code"),
        z: unpack(rows, "dogowner"),
        text: unpack(rows, "country"),
        colorscale: [
        [0, "rgb(5, 10, 172)"],
        [0.35, "rgb(40, 60, 190)"],
        [0.5, "rgb(70, 100, 245)"],
        [0.6, "rgb(90, 120, 245)"],
        [0.7, "rgb(106, 137, 247)"],
        [1, "rgb(220, 220, 220)"],
        ],
        autocolorscale: false,
        reversescale: true,
        marker: {
        line: {
            color: "rgb(180,180,180)",
            width: 0.5,
        },
        },
        tick0: 0,
        zmin: 0,
        dtick: 1000,
        colorbar: {
        autotic: false,
        title: "% of Dog Owners",
        },
    },
    ];

    let layout = {
    title: "Dog Owners Internationally",
    width: 700,
    height: 400,
    geo: {
        showframe: false,
        showcoastlines: false,
        projection: {
        type: "mercator",
        },
    },
    };
    Plotly.plot(mapGraph, data, layout, { showLink: false });
}
);

Plotly.d3.csv(
"https://raw.githubusercontent.com/caseylock-nm2207/caseylock-nm2207.github.io/main/resources/petsdata.csv",
function (err, rows) {
    function unpack(rows, key) {
    return rows.map(function (row) {
        return row[key];
    });
    }

    let data = [
    {
        type: "choropleth",
        locations: unpack(rows, "code"),
        z: unpack(rows, "catowner"),
        text: unpack(rows, "country"),
        colorscale: [
        [0, "rgb(5, 10, 172)"],
        [0.35, "rgb(40, 60, 190)"],
        [0.5, "rgb(70, 100, 245)"],
        [0.6, "rgb(90, 120, 245)"],
        [0.7, "rgb(106, 137, 247)"],
        [1, "rgb(220, 220, 220)"],
        ],
        autocolorscale: false,
        reversescale: true,
        marker: {
        line: {
            color: "rgb(180,180,180)",
            width: 0.5,
        },
        },
        tick0: 0,
        zmin: 0,
        dtick: 1000,
        colorbar: {
        autotic: false,
        title: "% of Cat Owners",
        },
    },
    ];

    let layout = {
    title: "Cat Owners Internationally",
    width: 700,
    height: 400,
    geo: {
        showframe: false,
        showcoastlines: false,
        projection: {
        type: "mercator",
        },
    },
    };
    Plotly.plot(mapGraph2, data, layout, { showLink: false });
}
);

const wellbeing = [
    "Depression",
    "Loneliness",
    "Self-Esteem",
    "Physical Illness and Symptoms",
    "Subjective Happiness",
    "Exercise and Fitness",
];
const owner = [30.0, 38.64, 34.27, 3.98, 5.2, 4.4];
const nonowner = [31.72, 41.64, 32.21, 4.21, 5.06, 3.94];

const dataObj = {
    labels: wellbeing,
    datasets: [
        {
        label: "Pet Owners",
        data: owner,
        backgroundColor: "#e3fcfe",
        },
        {
        label: "Non Pet Owners",
        data: nonowner,
        backgroundColor: "#97a8a9",
        },
    ],
};

new Chart("barGraph", {
    type: "bar",
    data: dataObj,
    options: {
        maintainAspectRatio: false,
        plugins: {
        title: {
            display: true,
            text: ["Pet Owners vs Non Pet Owners"],
            font: {
            size: 20,
            family: "Gill Sans",
            },
            color: "rgb(255,255,255)",
        },
        legend: {
            display: true,
            labels: {
            color: "white",
            font: {
                family: "Gill Sans",

                size: 15,
            },
            },
        },
        },
        scales: {
            y: {
                ticks: {
                color: "white",
                font: {
                    size: 15,
                    family: "Gill Sans",
                },
                },
            },
            x: {
                ticks: {
                color: "white",
                font: {
                    size: 15,
                    family: "Gill Sans",
                },
                },
            },
        },
    },
});

const personality = [
    "Openness",
    "Agreeableness",
    "Conscientiousness",
    "Extraversion",
    "Neuroticism",
];

const dataObj2 = {
    labels: personality,
    datasets: [
        {
        label: "Cat Owners",
        data: [3.7, 3.7, 3.75, 2.44, 3.09],
        backgroundColor: "#e3fcfe85",
        },
        {
        label: "Dog Owners",
        data: [3.65, 3.92, 4.02, 2.72, 2.64],
        backgroundColor: "#97a8a985",
        },
    ],
};

new Chart("petRadar", {
    type: "radar",
    data: dataObj2,
    options: {
        plugins: {
        title: {
            display: true,
            text: ["Big 5 Personality Traits"],
            font: {
            size: 20,
            family: "Gill Sans",
            },
            color: "black",
        },
        legend: {
            display: true,
            labels: {
            color: "black",
            font: {
                family: "Gill Sans",
                size: 15,
            },
            },
        },
        },
    },
});

const docvisit = [5.0, 4.4, 4.6, 4.2, 4.4];
const medication = [19, 12, 11, 15, 11];
const typeofowner = [
    "No dog or no cat",
    "Owns dog or cat",
    "Owns dog, no cat",
    "Owns cat, no dog",
    "Owns dog and cat",
];

const dataObj3 = {
    labels: typeofowner,
    datasets: [
        {
        label: "Average annual number of doctor visits",
        data: docvisit,
        backgroundColor: "#e3fcfe",
        },
        {
        label: "Percentage of people on medication",
        data: medication,
        backgroundColor: "#97a8a9",
        },
    ],
};

new Chart("stackedBarGraph", {
    type: "bar",
    data: dataObj3,
    options: {
        maintainAspectRatio: false,
        plugins: {
        title: {
            display: true,
            text: ["Benefits to Health"],
            font: {
            size: 20,
            family: "Gill Sans",
            },
            color: "rgb(255,255,255)",
        },
        legend: {
            display: true,
            labels: {
            color: "white",
            font: {
                family: "Gill Sans",
                size: 15,
            },
            },
        },
        },
        scales: {
            y: {
                stacked: true,
                ticks: {
                color: "white",
                font: {
                    size: 15,
                    family: "Gill Sans",
                },
                },
            },
            x: {
                stacked: true,
                ticks: {
                color: "white",
                font: {
                    size: 15,
                    family: "Gill Sans",
                },
                },
            },
        },
    },
});

const docvisitpet = [5.3, 6.7];
const docvisitnopet = [5.9, 7.6];
const medicationpet = [29, 40];
const medicationnopet = [34, 50];
const age = ["Men over 54", "Women over 55"];

const dataObj4 = {
    labels: age,
    datasets: [
        {
        label: "Pet Owners: Average doctor visits in the last year",
        data: docvisitpet,
        backgroundColor: "#e3fcfe",
        stack: "Stack 0",
        },
        {
        label: "Pet Owners: Percentage of people on medication",
        data: medicationpet,
        backgroundColor: "#97a8a9",
        stack: "Stack 0",
        },
        {
        label: "Non Pet Owners: Average doctor visits in the last yea",
        data: docvisitnopet,
        backgroundColor: "#e3fcfe",
        stack: "Stack 1",
        },
        {
        label: "Non Pet Owners: Percentage of people on medication",
        data: medicationnopet,
        backgroundColor: "#97a8a9",
        stack: "Stack 1",
        },
    ],
};

new Chart("stackedBarGraph2", {
    type: "bar",
    data: dataObj4,
    options: {
        maintainAspectRatio: false,
        plugins: {
        title: {
            display: true,
            text: ["Benefits to Health"],
            font: {
            size: 20,
            family: "Gill Sans",
            },
            color: "rgb(255,255,255)",
        },
        legend: {
            display: true,
            labels: {
            color: "white",
            font: {
                family: "Gill Sans",
                size: 15,
            },
            },
        },
        },
        responsive: true,
        interaction: {
        intersect: false,
        },
        scales: {
            y: {
                stacked: true,
                ticks: {
                color: "white",
                font: {
                    size: 15,
                    family: "Gill Sans",
                },
                },
            },
            x: {
                stacked: true,
                ticks: {
                color: "white",
                font: {
                    size: 15,
                    family: "Gill Sans",
                },
                },
            },
        },
    },
});

const childDev = [
    "Social Activator",
    "Hypersensitive",
    "Reassurance",
    "Uncooperative",
    "Cooperative",
    "Empathy",
    "Peabody IQ",
];
const petpresence = [0.06, -0.07, 0.12, -0.14, -0.03, 0.26, 0.18];
const companion = [0.17, -0.14, 0.29, -0.25, 0.15, 0.52, 0.2];

const dataObj5 = {
    labels: childDev,
    datasets: [
        {
        label: "Pet Presence",
        data: petpresence,
        backgroundColor: "#e3fcfe",
        },
        {
        label: "Companion Animal Bond",
        data: companion,
        backgroundColor: "#97a8a9",
        },
    ],
};

new Chart("barGraph2", {
    type: "bar",
    data: dataObj5,
    options: {
        maintainAspectRatio: false,
        plugins: {
        title: {
            display: true,
            text: [
            "Correlations: Children's Development and Child-Pet Relationships",
            ],
            font: {
            size: 20,
            family: "Gill Sans",
            },
            color: "rgb(255,255,255)",
        },
        legend: {
            display: true,
            labels: {
            color: "white",
            font: {
                family: "Gill Sans",
                size: 15,
            },
            },
        },
        },
        scales: {
        y: {
            ticks: {
            color: "white",
            font: {
                size: 15,
                family: "Gill Sans",
            },
            },
        },
        x: {
            ticks: {
            color: "white",
            font: {
                size: 15,
                family: "Gill Sans",
            },
            },
        },
        },
    },
});

const mentalB1 = document.querySelector("#mentalB1");

mentalB1.addEventListener("mouseenter", () => {
    mentalB1.querySelector("span").innerHTML =
    "Playing with a dog or cat can elevate levels of serotonin and dopamine, which calm and relax.";
});

mentalB1.addEventListener("mouseleave", () => {
    mentalB1.querySelector("span").innerHTML = "Calming";
});

const mentalB2 = document.querySelector("#mentalB2");

mentalB2.addEventListener("mouseenter", () => {
    mentalB2.querySelector("span").innerHTML =
    "Companionship can help prevent illness and even add years to your life, while isolation and loneliness can trigger symptoms of depression. Caring for an animal can help make you feel needed and wanted, and take the focus away from your problems, especially if you live alone. Most dog and cat owners talk to their pets, some even use them to work through their troubles. And nothing beats loneliness like coming home to a wagging tail or purring cat.";
});

mentalB2.addEventListener("mouseleave", () => {
    mentalB2.querySelector("span").innerHTML = "Companionship";
});

const mentalB3 = document.querySelector("#mentalB3");

mentalB3.addEventListener("mouseenter", () => {
    mentalB3.querySelector("span").innerHTML =
    "Pets can be a great social lubricant for their owners, helping you start and maintain new friendships. Dog owners frequently stop and talk to each other on walks, hikes, or in a dog park. Pet owners also meet new people in pet stores, clubs, and training classes.";
});

mentalB3.addEventListener("mouseleave", () => {
    mentalB3.querySelector("span").innerHTML = "Meet New People";
});

const mentalB4 = document.querySelector("#mentalB4");

mentalB4.addEventListener("mouseenter", () => {
    mentalB4.querySelector("span").innerHTML =
    "The companionship of an animal can offer comfort, help ease anxiety, and build self-confidence for people anxious about going out into the world. Because pets tend to live in the moment—they don't worry about what happened yesterday or what might happen tomorrow—they can help you become more mindful and appreciate the joy of the present.";
});

mentalB4.addEventListener("mouseleave", () => {
    mentalB4.querySelector("span").innerHTML = "Reduce Anxiety";
});

const mentalB5 = document.querySelector("#mentalB5");

mentalB5.addEventListener("mouseenter", () => {
    mentalB5.querySelector("span").innerHTML =
    "Many pets, especially dogs, require a regular feeding and exercise schedule. Having a consistent routine keeps an animal balanced and calm—and it can work for you, too. No matter your mood—depressed, anxious, or stressed—one plaintive look from your pet and you’ll have to get out of bed to feed, exercise, and care for them.";
});

mentalB5.addEventListener("mouseleave", () => {
    mentalB5.querySelector("span").innerHTML = "Keeping a Routine";
});

const mentalB6 = document.querySelector("#mentalB6");

mentalB6.addEventListener("mouseenter", () => {
    mentalB6.querySelector("span").innerHTML =
    "Taking a dog for a walk, hike, or run are fun and rewarding ways to fit healthy daily exercise into your schedule. Studies have shown that dog owners are far more likely to meet their daily exercise requirements—and exercising every day is great for the animal as well. It will deepen the connection between you, eradicate most behavior problems in dogs, and keep your pet fit and healthy.";
});

mentalB6.addEventListener("mouseleave", () => {
    mentalB6.querySelector("span").innerHTML = "Increasing Exercise";
});

const mentalB7 = document.querySelector("#mentalB7");

mentalB7.addEventListener("mouseenter", () => {
    mentalB7.querySelector("span").innerHTML =
    "Touch and movement are two healthy ways to quickly manage stress. Stroking a dog or cat can lower blood pressure and help you quickly feel calmer and less stressed.";
});

mentalB7.addEventListener("mouseleave", () => {
    mentalB7.querySelector("span").innerHTML = "Relieve Stress";
});

const elderlyB1 = document.querySelector("#elderlyB1");

elderlyB1.addEventListener("mouseenter", () => {
    elderlyB1.querySelector("span").innerHTML =
    "Find meaning and joy in life. As you age, you'll lose things that previously occupied your time and gave your life purpose. You may retire from your career or your children may move far away. Caring for a pet can bring pleasure and help boost your morale, optimism, and sense of self-worth. Choosing to adopt a pet from a shelter, especially an older pet, can add to your sense of fulfillment, knowing that you've provided a home to a pet that may otherwise have been euthanized.";
});

elderlyB1.addEventListener("mouseleave", () => {
    elderlyB1.querySelector("span").innerHTML = "Meaning in Life";
});

const elderlyB2 = document.querySelector("#elderlyB2");

elderlyB2.addEventListener("mouseenter", () => {
    elderlyB2.querySelector("span").innerHTML =
    "Stay connected. Maintaining a social network isn't always easy as you grow older. Retirement, illness, death, and relocation can take away close friends and family members. And making new friends can get harder. Pets, especially dogs, are a great way for older adults to spark up conversations and meet new people. It will reduce loneliness and isolation.";
});

elderlyB2.addEventListener("mouseleave", () => {
    elderlyB2.querySelector("span").innerHTML = "Reduce Loneliness";
});

const elderlyB3 = document.querySelector("#elderlyB3");

elderlyB3.addEventListener("mouseenter", () => {
    elderlyB3.querySelector("span").innerHTML =
    "You can overcome many of the physical challenges associated with aging by taking good care of yourself. Dogs and cats encourage playfulness, laughter, and exercise, which can help boost your immune system and increase your energy. Lower blood sugar, lower blood pressure, and better cardiovascular functioning are some other senior health benefits of owning a pet. In addition, pet owners are even more likely to engage in healthier diets than others.";
});

elderlyB3.addEventListener("mouseleave", () => {
    elderlyB3.querySelector("span").innerHTML = "Health";
});

const elderlyB4 = document.querySelector("#elderlyB4");

elderlyB4.addEventListener("mouseenter", () => {
    elderlyB4.querySelector("span").innerHTML =
    "Owning a pet improves memory recall, memory retention, and improved mental cognition in the owner.";
});

elderlyB4.addEventListener("mouseleave", () => {
    elderlyB4.querySelector("span").innerHTML = "Memory";
});

const childrenB1 = document.querySelector("#childrenB1");

childrenB1.addEventListener("mouseenter", () => {
    childrenB1.querySelector("span").innerHTML =
    'Pets of all different shapes and sizes are important for children to feel a sense of comfort and companionship, especially those struggling with emotional issues like anxiety and depression. Having a pet provides helpful coping skills for children by alleviating loneliness and isolation, and other emotions they are struggling with. A <a href = "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5369070/" id="darka">study published in The Journal of Environmental Research and Public Health</a> found evidence that children turn to their pets for comfort, reassurance, and emotional support. Children find security and comfort in having a pet that is always there for them to play with and hug. Sometimes children have trouble connecting with other children or even adults, which is why a family pet can be beneficial since they find it easier to bond with an animal. Plus, pets are nonjudgmental and supportive, providing a safe space for children to express themselves.';
});

childrenB1.addEventListener("mouseleave", () => {
    childrenB1.querySelector("span").innerHTML = "Coping Skills";
});

const childrenB2 = document.querySelector("#childrenB2");

childrenB2.addEventListener("mouseenter", () => {
    childrenB2.querySelector("span").innerHTML =
    `Many children struggle with low self-esteem, which can lead to other issues. Fortunately, pets can help build a child’s confidence, which ultimately will make them happier. Kids with pets have higher self-esteem and confidence because they talk to, or confide in, the animal in ways that they would not do with people. Interacting with pets in this way also gives kids a chance to practice social skills. Additionally, experts have found that children who own pets have better social interaction with their peers since a pet gives them something to talk about with other kids their age. The best time for a child to have a pet to help build self-esteem is under age six. Dogs and cats are considered to be the ideal types of pets to provide social support since they offer a greater level of interaction and reciprocation than other animals.`;
});

childrenB2.addEventListener("mouseleave", () => {
    childrenB2.querySelector("span").innerHTML = "Self-Esteem";
});

const childrenB3 = document.querySelector("#childrenB3");

childrenB3.addEventListener("mouseenter", () => {
    childrenB3.querySelector("span").innerHTML =
    "Taking care of a pet also helps children develop empathy. Because kids are naturally focused on their own wants and needs, a pet that depends on them can have a huge impact on broadening their perspective on how to care for others. One thing you can do is ask your children to pay attention to your pet’s mood and observe if it seems sad or sick. This will teach them how to be sympathetic to others’ feelings and needs (both animals and humans). They can also use these skills to participate in volunteer projects to help animals, such as a local animal shelter, nature center, or zoo.";
});

childrenB3.addEventListener("mouseleave", () => {
    childrenB3.querySelector("span").innerHTML = "Empathy";
});

const childrenB4 = document.querySelector("#childrenB4");

childrenB4.addEventListener("mouseenter", () => {
    childrenB4.querySelector("span").innerHTML =
    'An incredible benefit of children being around a pet is that they can help prevent allergies and obesity. Pets are often to blame for allergies, but a <a href = "https://microbiomejournal.biomedcentral.com/articles/10.1186/s40168-017-0254-x" id="darka">recent study conducted at the University of Alberta in Canada</a> revealed that exposure to furry pets at a young age can actually safeguard children against both allergies and obesity. This is possible because immunity builds up naturally as infants are exposed to the dirt and bacteria from the pet’s fur and paws, even if parents only had the pet while the mother was pregnant.';
});

childrenB4.addEventListener("mouseleave", () => {
    childrenB4.querySelector("span").innerHTML = "Health";
});

const childrenB5 = document.querySelector("#childrenB5");

childrenB5.addEventListener("mouseenter", () => {
    childrenB5.querySelector("span").innerHTML =
    'Owning a pet also gives children a chance to learn how to be responsible. Simple tasks like walking the dog, cleaning up the birdcage, bathing or brushing a furry pet, or filling a food bowl can instill a sense of ownership and accomplishment in a child.';
});

childrenB5.addEventListener("mouseleave", () => {
    childrenB5.querySelector("span").innerHTML = "Responsbility";
});

function getData() {
    fetch("https://nm2207-db.vercel.app/api/pets")
    .then(response => response.json().then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const item = document.createElement('li');
            item.innerHTML = "Pet: " + data[i].own + "<br>Breed: " + data[i].breed + "<br>Advice/suggestion: " + data[i].advice;
            document.querySelector('#list').appendChild(item);
        }
    }))
}

getData();

function updateData() {
    const own = document.getElementById("pet").value
    const advice = document.getElementById("breed").value
    const breed = document.getElementById("advice").value

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            own: own,
            advice: advice,
            breed: breed,
        })
    };
    fetch("https://nm2207-db.vercel.app/api/pets", requestOptions)
    .then(response => response.json())
}

function refreshAdvice() {
    let pettext = document.getElementById("pet");
    let breedtext = document.getElementById("breed");
    let advicetext = document.getElementById("advice");
    pettext.value = "";
    breedtext.value = "";
    advicetext.value = "";
}

const adviceButton = document.getElementById("adviceButton");
adviceButton.addEventListener("click", function () {
    updateData();
    refreshAdvice();

    window.alert("Thank you for you advice/suggestion. Wishing you a good day ahead :D");
});
