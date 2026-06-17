// World Cup 2026 Khmer Tracker App Logic

// Initial Database of Teams
const TEAMS = {
  // Group A
  MEX: { name_kh: "ម៉ិកស៊ិក", name_en: "Mexico", flag: "🇲🇽", group: "A" },
  RSA: { name_kh: "អាហ្វ្រិកខាងត្បូង", name_en: "South Africa", flag: "🇿🇦", group: "A" },
  KOR: { name_kh: "កូរ៉េខាងត្បូង", name_en: "South Korea", flag: "🇰🇷", group: "A" },
  CZE: { name_kh: "ឆេក", name_en: "Czechia", flag: "🇨🇿", group: "A" },
  // Group B
  CAN: { name_kh: "កាណាដា", name_en: "Canada", flag: "🇨🇦", group: "B" },
  BIH: { name_kh: "បូស្នី ហឺហ្សេកូវីណា", name_en: "Bosnia & Herzegovina", flag: "🇧🇦", group: "B" },
  QAT: { name_kh: "កាតា", name_en: "Qatar", flag: "🇶🇦", group: "B" },
  SUI: { name_kh: "ស្វីស", name_en: "Switzerland", flag: "🇨🇭", group: "B" },
  // Group C
  BRA: { name_kh: "ប្រេស៊ីល", name_en: "Brazil", flag: "🇧🇷", group: "C" },
  MAR: { name_kh: "ម៉ារ៉ុក", name_en: "Morocco", flag: "🇲🇦", group: "C" },
  HAI: { name_kh: "ហៃទី", name_en: "Haiti", flag: "🇭🇹", group: "C" },
  SCO: { name_kh: "ស្កុតឡែន", name_en: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", group: "C" },
  // Group D
  USA: { name_kh: "សហរដ្ឋអាមេរិក", name_en: "United States", flag: "🇺🇸", group: "D" },
  PAR: { name_kh: "ប៉ារ៉ាហ្គាយ", name_en: "Paraguay", flag: "🇵🇾", group: "D" },
  AUS: { name_kh: "អូស្ត្រាលី", name_en: "Australia", flag: "🇦🇺", group: "D" },
  TUR: { name_kh: "តួកគី", name_en: "Türkiye", flag: "🇹🇷", group: "D" },
  // Group E
  GER: { name_kh: "អាល្លឺម៉ង់", name_en: "Germany", flag: "🇩🇪", group: "E" },
  CUW: { name_kh: "គួរ៉ាសៅ", name_en: "Curaçao", flag: "🇨🇼", group: "E" },
  CIV: { name_kh: "កូដឌីវ័រ", name_en: "Ivory Coast", flag: "🇨🇮", group: "E" },
  ECU: { name_kh: "អេក្វាទ័រ", name_en: "Ecuador", flag: "🇪🇨", group: "E" },
  // Group F
  NED: { name_kh: "ហូឡង់", name_en: "Netherlands", flag: "🇳🇱", group: "F" },
  JPN: { name_kh: "ជប៉ុន", name_en: "Japan", flag: "🇯🇵", group: "F" },
  SWE: { name_kh: "ស៊ុយអែត", name_en: "Sweden", flag: "🇸🇪", group: "F" },
  TUN: { name_kh: "ទុយនីស៊ី", name_en: "Tunisia", flag: "🇹🇳", group: "F" },
  // Group G
  BEL: { name_kh: "ប៊ែលហ្សិក", name_en: "Belgium", flag: "🇧🇪", group: "G" },
  EGY: { name_kh: "អេស៊ីប", name_en: "Egypt", flag: "🇪🇬", group: "G" },
  IRN: { name_kh: "អ៊ីរ៉ង់", name_en: "Iran", flag: "🇮🇷", group: "G" },
  NZL: { name_kh: "នូវែលសេឡង់", name_en: "New Zealand", flag: "🇳🇿", group: "G" },
  // Group H
  ESP: { name_kh: "អេស្ប៉ាញ", name_en: "Spain", flag: "🇪🇸", group: "H" },
  CPV: { name_kh: "កាប់វែរ", name_en: "Cape Verde", flag: "🇨🇻", group: "H" },
  KSA: { name_kh: "អារ៉ាប៊ីសាអូឌីត", name_en: "Saudi Arabia", flag: "🇸🇦", group: "H" },
  URU: { name_kh: "អ៊ុយរ៉ូហ្គាយ", name_en: "Uruguay", flag: "🇺🇾", group: "H" },
  // Group I
  FRA: { name_kh: "បារាំង", name_en: "France", flag: "🇫🇷", group: "I" },
  SEN: { name_kh: "សេណេហ្គាល់", name_en: "Senegal", flag: "🇸🇳", group: "I" },
  IRQ: { name_kh: "អ៊ីរ៉ាក់", name_en: "Iraq", flag: "🇮🇶", group: "I" },
  NOR: { name_kh: "ណ័រវែស", name_en: "Norway", flag: "🇳🇴", group: "I" },
  // Group J
  ARG: { name_kh: "អាហ្សង់ទីន", name_en: "Argentina", flag: "🇦🇷", group: "J" },
  ALG: { name_kh: "អាល់ហ្សេរី", name_en: "Algeria", flag: "🇩🇿", group: "J" },
  AUT: { name_kh: "អូទ្រីស", name_en: "Austria", flag: "🇦🇹", group: "J" },
  JOR: { name_kh: "ហ្សូដង់", name_en: "Jordan", flag: "🇯🇴", group: "J" },
  // Group K
  POR: { name_kh: "ព័រទុយហ្គាល់", name_en: "Portugal", flag: "🇵🇹", group: "K" },
  COD: { name_kh: "កុងហ្គោ", name_en: "DR Congo", flag: "🇨🇩", group: "K" },
  UZB: { name_kh: "អ៊ុយបេគីស្ថាន", name_en: "Uzbekistan", flag: "🇺🇿", group: "K" },
  COL: { name_kh: "កូឡុំប៊ី", name_en: "Colombia", flag: "🇨🇴", group: "K" },
  // Group L
  ENG: { name_kh: "អង់គ្លេស", name_en: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "L" },
  CRO: { name_kh: "ក្រូអាត", name_en: "Croatia", flag: "🇭🇷", group: "L" },
  GHA: { name_kh: "កាណា", name_en: "Ghana", flag: "🇬🇭", group: "L" },
  PAN: { name_kh: "ប៉ាណាម៉ា", name_en: "Panama", flag: "🇵🇦", group: "L" }
};

// Initial Matches schedule with times and results
// Dates are relative to June 2026. Current time is June 16, 2026, 07:25 AM Cambodia Time.
const INITIAL_MATCHES = [
  // Finished Matches
  {
    id: 1, home: "MEX", away: "RSA", homeScore: 2, awayScore: 0,
    status: "FINISHED", stage: "Group A", date: "2026-06-11",
    time_us: "12:00 PM CDT", time_kh: "12:00 AM (June 12)",
    stadium: "Mexico City Stadium", city: "Mexico City", events: [
      { minute: 24, type: "goal", team: "MEX", player: "H. Lozano" },
      { minute: 67, type: "goal", team: "MEX", player: "S. Giménez" }
    ]
  },
  {
    id: 2, home: "KOR", away: "CZE", homeScore: 2, awayScore: 1,
    status: "FINISHED", stage: "Group A", date: "2026-06-11",
    time_us: "7:30 PM CST", time_kh: "07:30 AM (June 12)",
    stadium: "Guadalajara Stadium", city: "Guadalajara",
    highlightUrl: "https://www.fifa.com/en/watch/1iidGe97khg8lmdSRopdh4",
    events: [
      { minute: 15, type: "goal", team: "KOR", player: "Son Heung-min" },
      { minute: 49, type: "goal", team: "CZE", player: "P. Schick" },
      { minute: 82, type: "goal", team: "KOR", player: "Hwang Hee-chan" }
    ]
  },
  {
    id: 3, home: "CAN", away: "BIH", homeScore: 1, awayScore: 1,
    status: "FINISHED", stage: "Group B", date: "2026-06-12",
    time_us: "7:00 PM EDT", time_kh: "06:00 AM (June 13)",
    stadium: "Toronto Stadium", city: "Toronto",
    highlightUrl: "https://www.fifa.com/en/watch/5ekSKA6XJZqv9Fag9pl7sH",
    events: [
      { minute: 34, type: "goal", team: "BIH", player: "E. Džeko" },
      { minute: 78, type: "goal", team: "CAN", player: "J. David" }
    ]
  },
  {
    id: 4, home: "USA", away: "PAR", homeScore: 4, awayScore: 1,
    status: "FINISHED", stage: "Group D", date: "2026-06-12",
    time_us: "6:00 PM PDT", time_kh: "08:00 AM (June 13)",
    stadium: "Los Angeles Stadium", city: "Los Angeles", events: [
      { minute: 12, type: "goal", team: "USA", player: "C. Pulisic" },
      { minute: 30, type: "goal", team: "USA", player: "F. Balogun" },
      { minute: 45, type: "card-yellow", team: "PAR", player: "G. Gómez" },
      { minute: 55, type: "goal", team: "PAR", player: "M. Almirón" },
      { minute: 68, type: "goal", team: "USA", player: "T. Weah" },
      { minute: 88, type: "goal", team: "USA", player: "B. Aaronson" }
    ]
  },
  {
    id: 5, home: "QAT", away: "SUI", homeScore: 1, awayScore: 1,
    status: "FINISHED", stage: "Group B", date: "2026-06-13",
    time_us: "12:00 PM PDT", time_kh: "02:00 AM (June 14)",
    stadium: "San Francisco Bay Area Stadium", city: "San Francisco", events: [
      { minute: 41, type: "goal", team: "SUI", player: "B. Embolo" },
      { minute: 89, type: "goal", team: "QAT", player: "Almoez Ali" }
    ]
  },
  {
    id: 6, home: "BRA", away: "MAR", homeScore: 1, awayScore: 1,
    status: "FINISHED", stage: "Group C", date: "2026-06-13",
    time_us: "3:00 PM EDT", time_kh: "02:00 AM (June 14)",
    stadium: "New York New Jersey Stadium", city: "New York", events: [
      { minute: 18, type: "goal", team: "BRA", player: "Vinícius Jr." },
      { minute: 56, type: "goal", team: "MAR", player: "A. Hakimi" }
    ]
  },
  {
    id: 7, home: "SCO", away: "HAI", homeScore: 1, awayScore: 0,
    status: "FINISHED", stage: "Group C", date: "2026-06-13",
    time_us: "6:00 PM EDT", time_kh: "05:00 AM (June 14)",
    stadium: "Boston Stadium", city: "Boston", events: [
      { minute: 61, type: "goal", team: "SCO", player: "S. McTominay" }
    ]
  },
  {
    id: 8, home: "AUS", away: "TUR", homeScore: 2, awayScore: 0,
    status: "FINISHED", stage: "Group D", date: "2026-06-13",
    time_us: "7:00 PM PDT", time_kh: "09:00 AM (June 14)",
    stadium: "BC Place", city: "Vancouver", events: [
      { minute: 40, type: "goal", team: "AUS", player: "M. Boyle" },
      { minute: 73, type: "goal", team: "AUS", player: "M. Leckie" }
    ]
  },
  {
    id: 9, home: "GER", away: "CUW", homeScore: 7, awayScore: 1,
    status: "FINISHED", stage: "Group E", date: "2026-06-14",
    time_us: "1:00 PM CDT", time_kh: "01:00 AM (June 15)",
    stadium: "Houston Stadium", city: "Houston", events: [
      { minute: 5, type: "goal", team: "GER", player: "J. Musiala" },
      { minute: 14, type: "goal", team: "GER", player: "F. Wirtz" },
      { minute: 22, type: "goal", team: "GER", player: "K. Havertz" },
      { minute: 38, type: "goal", team: "GER", player: "J. Musiala" },
      { minute: 44, type: "goal", team: "CUW", player: "J. Bacuna" },
      { minute: 55, type: "goal", team: "GER", player: "L. Sané" },
      { minute: 70, type: "goal", team: "GER", player: "N. Füllkrug" },
      { minute: 83, type: "goal", team: "GER", player: "T. Müller" }
    ]
  },
  {
    id: 10, home: "NED", away: "JPN", homeScore: 2, awayScore: 2,
    status: "FINISHED", stage: "Group F", date: "2026-06-14",
    time_us: "4:00 PM CDT", time_kh: "04:00 AM (June 15)",
    stadium: "Dallas Stadium", city: "Dallas", events: [
      { minute: 22, type: "goal", team: "NED", player: "C. Gakpo" },
      { minute: 39, type: "goal", team: "JPN", player: "K. Mitoma" },
      { minute: 65, type: "goal", team: "JPN", player: "R. Doan" },
      { minute: 81, type: "goal", team: "NED", player: "M. Depay" }
    ]
  },
  {
    id: 11, home: "CIV", away: "ECU", homeScore: 1, awayScore: 0,
    status: "FINISHED", stage: "Group E", date: "2026-06-14",
    time_us: "7:00 PM EDT", time_kh: "06:00 AM (June 15)",
    stadium: "Philadelphia Stadium", city: "Philadelphia", events: [
      { minute: 58, type: "goal", team: "CIV", player: "S. Haller" }
    ]
  },
  {
    id: 12, home: "SWE", away: "TUN", homeScore: 5, awayScore: 1,
    status: "FINISHED", stage: "Group F", date: "2026-06-14",
    time_us: "9:00 PM CST", time_kh: "10:00 AM (June 15)",
    stadium: "Monterrey Stadium", city: "Monterrey", events: [
      { minute: 11, type: "goal", team: "SWE", player: "A. Isak" },
      { minute: 28, type: "goal", team: "SWE", player: "D. Kulusevski" },
      { minute: 45, type: "goal", team: "TUN", player: "W. Khazri" },
      { minute: 60, type: "goal", team: "SWE", player: "A. Isak" },
      { minute: 74, type: "goal", team: "SWE", player: "E. Forsberg" },
      { minute: 87, type: "goal", team: "SWE", player: "V. Gyökeres" }
    ]
  },
  {
    id: 13, home: "ESP", away: "CPV", homeScore: 3, awayScore: 0,
    status: "FINISHED", stage: "Group H", date: "2026-06-15",
    time_us: "1:00 PM EDT", time_kh: "12:00 AM (June 16)",
    stadium: "Atlanta Stadium", city: "Atlanta", events: [
      { minute: 14, type: "goal", team: "ESP", player: "Alvaro Morata" },
      { minute: 42, type: "goal", team: "ESP", player: "Nico Williams" },
      { minute: 76, type: "goal", team: "ESP", player: "Lamine Yamal" }
    ]
  },

  // Active / Live Matches (Current time is June 16, 2026, 7:25 AM)
  {
    id: 14, home: "BEL", away: "EGY", homeScore: 2, awayScore: 1,
    status: "LIVE", stage: "Group G", date: "2026-06-15",
    time_us: "4:00 PM PDT", time_kh: "06:00 AM (June 16)",
    stadium: "Seattle Stadium", city: "Seattle", elapsed: 85,
    highlightUrl: "https://www.fifa.com/en/watch/jLS5YXPMr0XAd5lMHtbiJ?cid=(p_go-box)(c_fwc)(sc_aramco-h-fwc26)(ssc_fwc-2026)(ma_14)",
    events: [
      { minute: 18, type: "goal", team: "BEL", player: "R. Lukaku" },
      { minute: 35, type: "goal", team: "EGY", player: "Mohamed Salah" },
      { minute: 62, type: "goal", team: "BEL", player: "K. De Bruyne" },
      { minute: 70, type: "card-yellow", team: "EGY", player: "M. Elneny" }
    ]
  },
  {
    id: 15, home: "KSA", away: "URU", homeScore: 1, awayScore: 2,
    status: "LIVE", stage: "Group H", date: "2026-06-15",
    time_us: "7:00 PM EDT", time_kh: "06:00 AM (June 16)",
    stadium: "Miami Stadium", city: "Miami", elapsed: 85, events: [
      { minute: 9, type: "goal", team: "URU", player: "D. Núñez" },
      { minute: 40, type: "goal", team: "KSA", player: "Salem Al-Dawsari" },
      { minute: 57, type: "goal", team: "URU", player: "F. Valverde" },
      { minute: 73, type: "card-yellow", team: "KSA", player: "Y. Al-Shahrani" }
    ]
  },

  // Upcoming Matches
  {
    id: 16, home: "IRN", away: "NZL", homeScore: 0, awayScore: 0,
    status: "UPCOMING", stage: "Group G", date: "2026-06-15",
    time_us: "6:00 PM PDT", time_kh: "08:00 AM (June 16)",
    stadium: "Los Angeles Stadium", city: "Los Angeles", events: []
  },
  {
    id: 17, home: "FRA", away: "SEN", homeScore: 0, awayScore: 0,
    status: "UPCOMING", stage: "Group I", date: "2026-06-16",
    time_us: "12:00 PM EDT", time_kh: "11:00 PM (June 16)",
    stadium: "New York New Jersey Stadium", city: "New York", events: []
  },
  {
    id: 18, home: "IRQ", away: "NOR", homeScore: 0, awayScore: 0,
    status: "UPCOMING", stage: "Group I", date: "2026-06-16",
    time_us: "3:00 PM EDT", time_kh: "02:00 AM (June 17)",
    stadium: "Boston Stadium", city: "Boston", events: []
  },
  {
    id: 19, home: "ARG", away: "ALG", homeScore: 0, awayScore: 0,
    status: "UPCOMING", stage: "Group J", date: "2026-06-16",
    time_us: "6:00 PM CDT", time_kh: "06:00 AM (June 17)",
    stadium: "Kansas City Stadium", city: "Kansas City", events: []
  },
  {
    id: 20, home: "AUT", away: "JOR", homeScore: 0, awayScore: 0,
    status: "UPCOMING", stage: "Group J", date: "2026-06-16",
    time_us: "9:00 PM PDT", time_kh: "11:00 AM (June 17)",
    stadium: "San Francisco Bay Area Stadium", city: "San Francisco", events: []
  },
  {
    id: 21, home: "POR", away: "COD", homeScore: 0, awayScore: 0,
    status: "UPCOMING", stage: "Group K", date: "2026-06-17",
    time_us: "1:00 PM EDT", time_kh: "12:00 AM (June 18)",
    stadium: "Houston Stadium", city: "Houston", events: []
  },
  {
    id: 22, home: "ENG", away: "CRO", homeScore: 0, awayScore: 0,
    status: "UPCOMING", stage: "Group L", date: "2026-06-17",
    time_us: "4:00 PM EDT", time_kh: "03:00 AM (June 18)",
    stadium: "Dallas Stadium", city: "Dallas", events: []
  },
  {
    id: 23, home: "GHA", away: "PAN", homeScore: 0, awayScore: 0,
    status: "UPCOMING", stage: "Group L", date: "2026-06-17",
    time_us: "7:00 PM EDT", time_kh: "06:00 AM (June 18)",
    stadium: "Toronto Stadium", city: "Toronto", events: []
  },
  {
    id: 24, home: "UZB", away: "COL", homeScore: 0, awayScore: 0,
    status: "UPCOMING", stage: "Group K", date: "2026-06-17",
    time_us: "10:00 PM EDT", time_kh: "09:00 AM (June 18)",
    stadium: "Mexico City Stadium", city: "Mexico City", events: []
  }
];

// App State
let matches = [];
let activeGroup = "A";
let simulatorInterval = null;
let isSimulating = false;

// Names translation
const STAGE_NAMES_KH = {
  "Group A": "ពូល A (Group A)",
  "Group B": "ពូល B (Group B)",
  "Group C": "ពូល C (Group C)",
  "Group D": "ពូល D (Group D)",
  "Group E": "ពូល E (Group E)",
  "Group F": "ពូល F (Group F)",
  "Group G": "ពូល G (Group G)",
  "Group H": "ពូល H (Group H)",
  "Group I": "ពូល I (Group I)",
  "Group J": "ពូល J (Group J)",
  "Group K": "ពូល K (Group K)",
  "Group L": "ពូល L (Group L)"
};

// Main Initialization
document.addEventListener("DOMContentLoaded", () => {
  initData();
  setupClock();
  setupTabs();
  setupFilters();
  setupStandingsNav();
  renderAll();
  setupSimulator();
  setupAdminControls();
  setupHighlightModal();
});

function setupHighlightModal() {
  const modal = document.getElementById("highlight-modal");
  const closeBtn = document.querySelector(".modal-close-btn");
  const iframe = document.getElementById("highlight-iframe");
  
  if (modal && closeBtn) {
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  
  function closeModal() {
    modal.classList.remove("active");
    if (iframe) iframe.src = ""; // Stop the video
  }
}

// Load from LocalStorage or initialize with defaults
function initData() {
  const storedMatches = localStorage.getItem("worldcup_2026_matches");
  if (storedMatches) {
    try {
      matches = JSON.parse(storedMatches);
      // Merge properties like highlightUrl from INITIAL_MATCHES in case they were added later
      matches = matches.map(m => {
        const initial = INITIAL_MATCHES.find(im => im.id === m.id);
        if (initial && initial.highlightUrl) {
          m.highlightUrl = initial.highlightUrl;
        }
        return m;
      });
    } catch (e) {
      matches = JSON.parse(JSON.stringify(INITIAL_MATCHES));
    }
  } else {
    matches = JSON.parse(JSON.stringify(INITIAL_MATCHES));
  }
  
  // Dynamically update statuses based on current system time
  updateMatchStatusesBasedOnTime();
}

// Automatically update match statuses based on the current system time
function updateMatchStatusesBasedOnTime() {
  const now = new Date();
  
  matches.forEach(match => {
    // Parse the start time of the match in Cambodia Time (GMT+7)
    const matchDate = parseKhmerTimeToDate(match.time_kh, match.date);
    const diffMs = now - matchDate; // Positive if in the past
    
    if (diffMs >= 120 * 60 * 1000) {
      // More than 2 hours ago -> should be Finished
      if (match.status !== "FINISHED") {
        match.status = "FINISHED";
        // If it was upcoming or live, let's keep its current score or merge from INITIAL_MATCHES
        const initial = INITIAL_MATCHES.find(im => im.id === match.id);
        if (initial) {
          match.homeScore = match.homeScore || initial.homeScore;
          match.awayScore = match.awayScore || initial.awayScore;
          if (!match.events || match.events.length === 0) {
            match.events = initial.events;
          }
        }
      }
    } else if (diffMs >= 0) {
      // Started less than 2 hours ago -> should be Live
      if (match.status === "UPCOMING") {
        match.status = "LIVE";
        match.elapsed = Math.min(Math.floor(diffMs / (1000 * 60)), 90);
      }
    }
  });
  
  saveData();
}

function saveData() {
  localStorage.setItem("worldcup_2026_matches", JSON.stringify(matches));
}

// Translate English match time string (e.g. "07:30 AM (June 12)") to a full Khmer datetime string with year
function formatKhmerTimeKh(timeKhStr) {
  if (!timeKhStr) return "";
  
  let result = timeKhStr;
  
  // Replace months
  result = result.replace(/June/g, "មិថុនា");
  result = result.replace(/July/g, "កក្កដា");
  
  // Replace AM/PM
  result = result.replace(/AM/g, "ព្រឹក");
  result = result.replace(/PM/g, "ល្ងាច/យប់");
  
  // Add year inside parentheses if a month is matched (e.g., "(មិថុនា 12)" -> "(12 មិថុនា ២០២៦)")
  result = result.replace(/\((មិថុនា|កក្កដា)\s+(\d+)\)/g, "($2 $1 ២០២៦)");
  
  // Replace numerals to Khmer numerals
  const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  result = result.split('').map(char => khmerNumerals[char] || char).join('');
  
  return result;
}

// Setup Cambodia Clock & Countdown
function setupClock() {
  const khmerMonths = [
    "មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", 
    "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"
  ];
  
  function updateTime() {
    // Current Local time is June 16, 2026. Let's base it off the current date/time
    // But since this runs in browser, let's display the browser's current date/time (which matches local timezone)
    const now = new Date();
    
    // Format: ថ្ងៃអង្គារ ទី១៦ មិថុនា ២០២៦ ម៉ោង ០៧:២៥:១០ ព្រឹក
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'ល្ងាច/យប់' : 'ព្រឹក';
    const displayHours = (hours % 12 || 12).toString().padStart(2, '0');
    
    const day = now.getDate();
    const month = khmerMonths[now.getMonth()];
    const year = now.getFullYear();
    
    // Khmer numerals
    const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    const toKhmerNum = (str) => str.toString().split('').map(char => khmerNumerals[char] || char).join('');
    
    const timeString = `ម៉ោង ${toKhmerNum(displayHours)}:${toKhmerNum(minutes)}:${toKhmerNum(seconds)} ${ampm}`;
    const dateString = `ថ្ងៃទី${toKhmerNum(day)} ${month} ${toKhmerNum(year)}`;
    
    const clockEl = document.getElementById("cambodia-clock");
    if (clockEl) {
      clockEl.innerHTML = `${dateString} | ${timeString}`;
    }
    
    updateCountdown(now);
  }
  
  setInterval(updateTime, 1000);
  updateTime();
}

// Countdown to the next upcoming match
function updateCountdown(now) {
  const upcomingMatches = matches
    .filter(m => m.status === "UPCOMING")
    .sort((a, b) => {
      // Parse dates to sort
      return new Date(a.date) - new Date(b.date);
    });
    
  const countdownEl = document.getElementById("countdown-container");
  if (!countdownEl) return;
  
  if (upcomingMatches.length === 0) {
    countdownEl.innerHTML = "គ្មានការប្រកួតបន្ទាប់ទៀតទេ";
    return;
  }
  
  const nextMatch = upcomingMatches[0];
  const homeTeam = TEAMS[nextMatch.home];
  const awayTeam = TEAMS[nextMatch.away];
  
  // Let's create an approximate match date object
  // Since time_kh looks like "08:00 AM (June 16)" or "11:00 PM (June 16)"
  const matchDate = parseKhmerTimeToDate(nextMatch.time_kh, nextMatch.date);
  
  const diffMs = matchDate - now;
  
  if (diffMs <= 0) {
    // If it started, refresh display
    nextMatch.status = "LIVE";
    nextMatch.elapsed = 0;
    saveData();
    renderAll();
    return;
  }
  
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);
  
  const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  const toKhmerNum = (str) => str.toString().split('').map(char => khmerNumerals[char] || char).join('');
  
  countdownEl.innerHTML = `
    <span style="color:var(--text-muted)">ការប្រកួតបន្ទាប់៖</span> 
    <strong>${homeTeam.flag} ${homeTeam.name_kh} vs ${awayTeam.name_kh} ${awayTeam.flag}</strong> 
    <span style="color:var(--color-gold); margin-left: 10px;">
      (ក្នុងរយៈពេល ${toKhmerNum(diffHrs)}ម៉ោង ${toKhmerNum(diffMins)}នាទី ${toKhmerNum(diffSecs)}វិនាទី)
    </span>
  `;
}

// Convert Khmer Match Time String to Date Object
function parseKhmerTimeToDate(timeKhStr, dateStr) {
  // time_kh e.g.: "08:00 AM (June 16)" or "12:00 AM (June 16)" or "02:00 AM (June 17)"
  const matchTime = timeKhStr.match(/(\d+):(\d+)\s*(AM|PM)/);
  if (!matchTime) return new Date();
  
  let hours = parseInt(matchTime[1]);
  const minutes = parseInt(matchTime[2]);
  const ampm = matchTime[3];
  
  if (ampm === "PM" && hours < 12) hours += 12;
  if (ampm === "AM" && hours === 12) hours = 0;
  
  // Extract month/day from (June 16) inside parentheses
  const dateMatch = timeKhStr.match(/\((June|July)\s+(\d+)\)/);
  let finalDateStr = dateStr;
  if (dateMatch) {
    const month = dateMatch[1] === "June" ? "06" : "07";
    const day = dateMatch[2].padStart(2, '0');
    finalDateStr = `2026-${month}-${day}`;
  }
  
  const matchDate = new Date(`${finalDateStr}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00+07:00`);
  return matchDate;
}

// Setup tab navigation
function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      
      tabButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));
      
      btn.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });
}

// Setup filters for Fixtures
function setupFilters() {
  const searchInput = document.getElementById("search-team");
  const groupSelect = document.getElementById("filter-group");
  const statusSelect = document.getElementById("filter-status");
  
  if (searchInput) searchInput.addEventListener("input", renderFixtures);
  if (groupSelect) groupSelect.addEventListener("change", renderFixtures);
  if (statusSelect) statusSelect.addEventListener("change", renderFixtures);
}

// Setup group selector in standings
function setupStandingsNav() {
  const standingsNav = document.getElementById("standings-groups-nav");
  if (!standingsNav) return;
  
  const groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  
  standingsNav.innerHTML = groups.map(g => `
    <div class="group-pill ${g === activeGroup ? 'active' : ''}" data-group="${g}">ពូល ${g}</div>
  `).join('');
  
  const pills = standingsNav.querySelectorAll(".group-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeGroup = pill.getAttribute("data-group");
      renderStandings();
    });
  });
}

// Render everything
function renderAll() {
  renderLiveMatches();
  renderFixtures();
  renderStandings();
  renderAdminList();
}

// Render Live Matches (Dashboard Left Panel)
function renderLiveMatches() {
  const liveContainer = document.getElementById("live-matches-list");
  if (!liveContainer) return;
  
  const liveMatches = matches.filter(m => m.status === "LIVE");
  
  if (liveMatches.length === 0) {
    liveContainer.innerHTML = `
      <div class="no-live-matches">
        <i class="pulse-dot" style="margin: 0 auto 15px auto; width: 15px; height: 15px;"></i>
        <p>បច្ចុប្បន្ន គ្មានការប្រកួតដែលកំពុងលេងផ្ទាល់ (Live) ទេ</p>
        <span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-top:5px;">
          សូមចុចប៊ូតុង "ចាប់ផ្តើមការប្រកួតសាកល្បង" នៅផ្នែកខាងស្តាំ ដើម្បីដំណើរការ Live Simulation
        </span>
      </div>
    `;
    return;
  }
  
  liveContainer.innerHTML = liveMatches.map(match => {
    const home = TEAMS[match.home];
    const away = TEAMS[match.away];
    
    // Sort events by minute descending
    const sortedEvents = [...match.events].sort((a, b) => b.minute - a.minute);
    
    const eventsHtml = sortedEvents.length > 0 
      ? `<div class="match-events">
           <div class="events-list">
             ${sortedEvents.map(e => {
               const icon = e.type === "goal" ? "⚽" : (e.type === "card-yellow" ? "🟨" : "🟥");
               const typeClass = e.type === "goal" ? "goal" : (e.type === "card-yellow" ? "card-yellow" : "card-red");
               const teamFlag = TEAMS[e.team].flag;
               return `
                 <div class="event-item">
                   <span class="event-icon ${typeClass}">${icon}</span>
                   <span><strong>${e.minute}'</strong> ${teamFlag} ${e.player}</span>
                 </div>
               `;
             }).join('')}
           </div>
         </div>`
      : "";
      
    return `
      <div class="match-card is-live" id="match-card-${match.id}">
        <div class="match-meta">
          <span class="match-stage">${STAGE_NAMES_KH[match.stage] || match.stage}</span>
          <div class="live-time-indicator">
            <span class="pulse-dot"></span>
            <span>កំពុងប្រកួតផ្ទាល់: ${match.elapsed}'</span>
          </div>
        </div>
        
        <div class="match-teams-grid">
          <div class="team-display">
            <span class="team-flag">${home.flag}</span>
            <span class="team-name">${home.name_kh}</span>
          </div>
          
          <div class="score-display">
            <div class="score-numbers">
              <span class="score-number" id="score-home-${match.id}">${match.homeScore}</span>
              <span class="score-divider">:</span>
              <span class="score-number" id="score-away-${match.id}">${match.awayScore}</span>
            </div>
             <span style="font-size:0.7rem; color:var(--color-cyan); margin-top:5px; font-weight:700;">
               ម៉ោងប្រកួតនៅកម្ពុជា: ${formatKhmerTimeKh(match.time_kh)}
             </span>
          </div>
          
          <div class="team-display">
            <span class="team-flag">${away.flag}</span>
            <span class="team-name">${away.name_kh}</span>
          </div>
        </div>
        
        <div class="match-venue" style="margin-bottom: 10px;">
          <i class="fill-current">📍</i>
          <span>${match.stadium} (${match.city})</span>
        </div>
        <div style="text-align: center; margin-top: 10px;"><button onclick="openHighlightModal(${match.id})" class="highlight-btn" style="margin-top: 0; border: none;">🎬 មើល Highlight</button></div>
        
        ${eventsHtml}
      </div>
    `;
  }).join('');
}

// Render Fixtures and Results (Tab 2)
function renderFixtures() {
  const container = document.getElementById("fixtures-list");
  if (!container) return;
  
  const searchVal = document.getElementById("search-team")?.value.toLowerCase() || "";
  const groupVal = document.getElementById("filter-group")?.value || "ALL";
  const statusVal = document.getElementById("filter-status")?.value || "ALL";
  
  // Filter matches
  let filtered = matches.filter(match => {
    const home = TEAMS[match.home];
    const away = TEAMS[match.away];
    
    // Search filter
    const matchesSearch = home.name_kh.toLowerCase().includes(searchVal) || 
                          home.name_en.toLowerCase().includes(searchVal) ||
                          away.name_kh.toLowerCase().includes(searchVal) ||
                          away.name_en.toLowerCase().includes(searchVal);
                          
    // Group filter
    const matchesGroup = groupVal === "ALL" || home.group === groupVal;
    
    // Status filter
    const matchesStatus = statusVal === "ALL" || match.status === statusVal;
    
    return matchesSearch && matchesGroup && matchesStatus;
  });
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px 20px; color:var(--text-muted);">
        គ្មានទិន្នន័យការប្រកួតដែលត្រូវនឹងលក្ខខណ្ឌចម្រោះទេ
      </div>
    `;
    return;
  }
  
  // Group filtered matches by Date
  const grouped = {};
  filtered.forEach(m => {
    if (!grouped[m.date]) {
      grouped[m.date] = [];
    }
    grouped[m.date].push(m);
  });
  
  // Date format function
  const khmerDays = {
    "Monday": "ចន្ទ", "Tuesday": "អង្គារ", "Wednesday": "ពុធ", 
    "Thursday": "ព្រហស្បតិ៍", "Friday": "សុក្រ", "Saturday": "សៅរ៍", "Sunday": "អាទិត្យ"
  };
  const khmerMonths = [
    "មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", 
    "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"
  ];
  
  const formatKhmerDate = (dateStr) => {
    const date = new Date(dateStr);
    const dayName = khmerDays[date.toLocaleDateString('en-US', { weekday: 'long' })];
    const day = date.getDate();
    const month = khmerMonths[date.getMonth()];
    const year = date.getFullYear();
    
    const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    const toKhmerNum = (str) => str.toString().split('').map(char => khmerNumerals[char] || char).join('');
    
    return `ថ្ងៃ${dayName} ទី${toKhmerNum(day)} ${month} ${toKhmerNum(year)}`;
  };
  
  // Build HTML
  let html = "";
  
  // Sort dates
  const sortedDates = Object.keys(grouped).sort();
  
  sortedDates.forEach(date => {
    html += `<div class="fixture-day-header">${formatKhmerDate(date)}</div>`;
    
    grouped[date].forEach(match => {
      const home = TEAMS[match.home];
      const away = TEAMS[match.away];
      
      let statusBadge = "";
      if (match.status === "FINISHED") {
        statusBadge = `<span class="fixture-status-pill finished">ចប់ការប្រកួត</span>`;
      } else if (match.status === "LIVE") {
        statusBadge = `<span class="fixture-status-pill live">ផ្ទាល់ (Live ${match.elapsed}')</span>`;
      } else {
        statusBadge = `<span class="fixture-status-pill upcoming">មិនទាន់លេង</span>`;
      }
      
      let centerContent = "";
      if (match.status === "FINISHED" || match.status === "LIVE") {
        const highlightHtml = `<button onclick="openHighlightModal(${match.id})" class="highlight-btn" style="border: none;">🎬 មើល Highlight</button>`;
        centerContent = `
          <div class="score-numbers" style="font-size: 1.5rem; letter-spacing: 2px;">
            <span>${match.homeScore}</span>
            <span style="color:var(--text-muted)">-</span>
            <span>${match.awayScore}</span>
          </div>
          ${statusBadge}
          ${highlightHtml}
        `;
      } else {
        centerContent = `
          <span class="fixture-vs-badge">VS</span>
          ${statusBadge}
        `;
      }
      
      html += `
        <div class="fixture-card">
          <div class="fixture-side-team home">
            <span>${home.name_kh}</span>
            <span class="team-flag" style="font-size: 1.8rem;">${home.flag}</span>
          </div>
          
          <div class="fixture-mid-info">
            <div class="fixture-time-kh">${formatKhmerTimeKh(match.time_kh)}</div>
            <div class="fixture-time-us">${match.time_us} | ${match.stadium}</div>
            ${centerContent}
          </div>
          
          <div class="fixture-side-team away">
            <span class="team-flag" style="font-size: 1.8rem;">${away.flag}</span>
            <span>${away.name_kh}</span>
          </div>
        </div>
      `;
    });
  });
  
  container.innerHTML = html;
}

// Render Group Standings (Tab 3)
function renderStandings() {
  const tableBody = document.getElementById("standings-table-body");
  const tableTitle = document.getElementById("standings-group-title");
  if (!tableBody || !tableTitle) return;
  
  tableTitle.innerHTML = `តារាងពិន្ទុ ពូល ${activeGroup} (Group ${activeGroup} Standings)`;
  
  // Calculate Standings for the active group
  // Get all teams in active group
  const groupTeams = Object.keys(TEAMS).filter(code => TEAMS[code].group === activeGroup);
  
  const standings = groupTeams.map(code => {
    return {
      code: code,
      name_kh: TEAMS[code].name_kh,
      flag: TEAMS[code].flag,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0, // goals for
      ga: 0, // goals against
      gd: 0, // goal difference
      pts: 0  // points
    };
  });
  
  // Find all matches for this group and apply results
  matches.forEach(match => {
    const homeTeamInGroup = groupTeams.includes(match.home);
    if (homeTeamInGroup && (match.status === "FINISHED" || match.status === "LIVE")) {
      const home = standings.find(t => t.code === match.home);
      const away = standings.find(t => t.code === match.away);
      
      if (!home || !away) return;
      
      home.played += 1;
      away.played += 1;
      home.gf += match.homeScore;
      home.ga += match.awayScore;
      away.gf += match.awayScore;
      away.ga += match.homeScore;
      
      if (match.homeScore > match.awayScore) {
        home.won += 1;
        home.pts += 3;
        away.lost += 1;
      } else if (match.homeScore < match.awayScore) {
        away.won += 1;
        away.pts += 3;
        home.lost += 1;
      } else {
        home.drawn += 1;
        home.pts += 1;
        away.drawn += 1;
        away.pts += 1;
      }
    }
  });
  
  // Calculate Goal Difference
  standings.forEach(t => {
    t.gd = t.gf - t.ga;
  });
  
  // Sort standings by points desc, goal difference desc, goals for desc
  standings.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    return b.gf - a.gf;
  });
  
  // Render Rows
  tableBody.innerHTML = standings.map((team, index) => {
    const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    const toKhmerNum = (str) => str.toString().split('').map(char => khmerNumerals[char] || char).join('');
    
    const gdClass = team.gd > 0 ? "pos" : (team.gd < 0 ? "neg" : "");
    const gdPrefix = team.gd > 0 ? "+" : "";
    
    return `
      <tr>
        <td>
          <span class="standing-rank">${toKhmerNum(index + 1)}</span>
        </td>
        <td class="table-team-cell">
          <span style="font-size: 1.5rem;">${team.flag}</span>
          <span>${team.name_kh}</span>
        </td>
        <td>${toKhmerNum(team.played)}</td>
        <td>${toKhmerNum(team.won)}</td>
        <td>${toKhmerNum(team.drawn)}</td>
        <td>${toKhmerNum(team.lost)}</td>
        <td>${toKhmerNum(team.gf)}-${toKhmerNum(team.ga)}</td>
        <td class="col-gd ${gdClass}">${gdPrefix}${toKhmerNum(team.gd)}</td>
        <td class="col-pts">${toKhmerNum(team.pts)}</td>
      </tr>
    `;
  }).join('');
}

// Render Admin Score Editor Panel
function renderAdminList() {
  const editorList = document.getElementById("admin-score-list");
  if (!editorList) return;
  
  editorList.innerHTML = matches.map(match => {
    const home = TEAMS[match.home];
    const away = TEAMS[match.away];
    
    return `
      <div class="editor-item">
        <div class="editor-teams">
          <span>${home.flag} ${match.home}</span>
          <span style="color:var(--text-muted)">vs</span>
          <span>${match.away} ${away.flag}</span>
        </div>
        <div class="editor-inputs">
          <input type="number" min="0" value="${match.homeScore}" class="editor-score-input" id="edit-home-${match.id}">
          <span style="color:var(--text-muted)">:</span>
          <input type="number" min="0" value="${match.awayScore}" class="editor-score-input" id="edit-away-${match.id}">
          <button class="editor-save-btn" onclick="saveAdminScore(${match.id})">រក្សាទុក</button>
        </div>
      </div>
    `;
  }).join('');
}

// Save Score from Admin Panel
window.saveAdminScore = function(matchId) {
  const homeVal = parseInt(document.getElementById(`edit-home-${matchId}`).value);
  const awayVal = parseInt(document.getElementById(`edit-away-${matchId}`).value);
  
  if (isNaN(homeVal) || isNaN(awayVal)) {
    showToast("កំហុស!", "សូមបញ្ជូលពិន្ទុឱ្យបានត្រឹមត្រូវ!");
    return;
  }
  
  const match = matches.find(m => m.id === matchId);
  if (match) {
    const oldHome = match.homeScore;
    const oldAway = match.awayScore;
    
    match.homeScore = homeVal;
    match.awayScore = awayVal;
    
    // If it was upcoming, maybe set it to finished since user entered score manually
    if (match.status === "UPCOMING") {
      match.status = "FINISHED";
    }
    
    saveData();
    renderAll();
    
    showToast(
      "ពិន្ទុត្រូវបានធ្វើបច្ចុប្បន្នភាព", 
      `${TEAMS[match.home].flag} ${TEAMS[match.home].name_kh} ${homeVal} - ${awayVal} ${TEAMS[match.away].name_kh} ${TEAMS[match.away].flag}`
    );
  }
};

// Toast Notifications System
function showToast(title, body) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = "toast";
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
  
  toast.innerHTML = `
    <div class="toast-header">
      <span class="toast-title">🔔 ${title}</span>
      <span class="toast-time">${timeStr}</span>
    </div>
    <div class="toast-body">${body}</div>
  `;
  
  container.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => toast.classList.add("show"), 10);
  
  // Auto remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// Live Simulator logic
function setupSimulator() {
  const toggleBtn = document.getElementById("btn-toggle-sim");
  if (!toggleBtn) return;
  
  toggleBtn.addEventListener("click", () => {
    if (isSimulating) {
      // Stop Simulation
      clearInterval(simulatorInterval);
      isSimulating = false;
      toggleBtn.innerText = "⚽ ចាប់ផ្តើមការប្រកួតសាកល្បង (Simulate)";
      toggleBtn.classList.remove("active");
      showToast("ការប្រកួតសាកល្បងត្រូវបានផ្អាក", "Simulator Mode off");
    } else {
      // Start Simulation
      isSimulating = true;
      toggleBtn.innerText = "🛑 បញ្ឈប់ការប្រកួតសាកល្បង";
      toggleBtn.classList.add("active");
      showToast("ការប្រកួតសាកល្បងបានចាប់ផ្តើម", "Simulator Mode is now running!");
      
      // Let's make sure we have active live matches, otherwise kickoff Iran vs New Zealand (id 16)
      const liveMatches = matches.filter(m => m.status === "LIVE");
      if (liveMatches.length === 0) {
        const nextUpcoming = matches.find(m => m.status === "UPCOMING");
        if (nextUpcoming) {
          nextUpcoming.status = "LIVE";
          nextUpcoming.elapsed = 0;
          nextUpcoming.homeScore = 0;
          nextUpcoming.awayScore = 0;
          nextUpcoming.events = [];
          showToast("ទាត់បាល់ចាប់ផ្តើម!", `ការប្រកួតរវាង ${TEAMS[nextUpcoming.home].name_kh} vs ${TEAMS[nextUpcoming.away].name_kh} បានចាប់ផ្តើមហើយ!`);
        }
      }
      
      simulatorInterval = setInterval(runSimulationTick, 3000); // Ticks every 3s (represents a few minutes in-game)
    }
  });
}

function runSimulationTick() {
  let stateChanged = false;
  
  matches.forEach(match => {
    if (match.status === "LIVE") {
      stateChanged = true;
      
      // Advance game minutes
      match.elapsed += Math.floor(Math.random() * 3) + 1; // Add 1 to 3 minutes
      
      // Check if match should finish (90+ minutes)
      if (match.elapsed >= 90) {
        match.status = "FINISHED";
        showToast(
          "ចប់ការប្រកួត! (Full Time)",
          `លទ្ធផល៖ ${TEAMS[match.home].flag} ${TEAMS[match.home].name_kh} ${match.homeScore} - ${match.awayScore} ${TEAMS[match.away].name_kh} ${TEAMS[match.away].flag}`
        );
        
        // Kickoff next upcoming match in schedule to keep live simulation alive!
        const nextUpcoming = matches.find(m => m.status === "UPCOMING");
        if (nextUpcoming) {
          nextUpcoming.status = "LIVE";
          nextUpcoming.elapsed = 0;
          nextUpcoming.homeScore = 0;
          nextUpcoming.awayScore = 0;
          nextUpcoming.events = [];
          showToast(
            "ទាត់បាល់ចាប់ផ្តើម! (Kickoff)", 
            `ការប្រកួតថ្មី៖ ${TEAMS[nextUpcoming.home].flag} ${TEAMS[nextUpcoming.home].name_kh} vs ${TEAMS[nextUpcoming.away].name_kh} ${TEAMS[nextUpcoming.away].flag} បានទាត់បាល់ចាប់ផ្តើមហើយ!`
          );
        }
        return;
      }
      
      // Probability check for scoring a goal
      // In normal World Cup matches, average goals is ~2.5 per 90 mins, so ~3% chance per tick
      const homeGoalProb = 0.05;
      const awayGoalProb = 0.04;
      const cardProb = 0.03;
      
      const random = Math.random();
      
      if (random < homeGoalProb) {
        // Home team scores!
        match.homeScore += 1;
        const scorer = getRandomPlayer(match.home);
        match.events.push({
          minute: match.elapsed,
          type: "goal",
          team: match.home,
          player: scorer
        });
        triggerScoreEffect(match.id, 'home');
        showToast(
          "⚽ គ្រាប់បាល់បញ្ចូលទី! (GOAL!)", 
          `ក្រុម ${TEAMS[match.home].flag} ${TEAMS[match.home].name_kh} រកបានគ្រាប់បាល់ដោយ ${scorer}! (${match.homeScore} - ${match.awayScore})`
        );
      } else if (random < homeGoalProb + awayGoalProb) {
        // Away team scores!
        match.awayScore += 1;
        const scorer = getRandomPlayer(match.away);
        match.events.push({
          minute: match.elapsed,
          type: "goal",
          team: match.away,
          player: scorer
        });
        triggerScoreEffect(match.id, 'away');
        showToast(
          "⚽ គ្រាប់បាល់បញ្ចូលទី! (GOAL!)", 
          `ក្រុម ${TEAMS[match.away].flag} ${TEAMS[match.away].name_kh} រកបានគ្រាប់បាល់ដោយ ${scorer}! (${match.homeScore} - ${match.awayScore})`
        );
      } else if (random < homeGoalProb + awayGoalProb + cardProb) {
        // Yellow or Red card
        const cardType = Math.random() < 0.85 ? "card-yellow" : "card-red";
        const teamCode = Math.random() < 0.5 ? match.home : match.away;
        const player = getRandomPlayer(teamCode);
        
        match.events.push({
          minute: match.elapsed,
          type: cardType,
          team: teamCode,
          player: player
        });
        
        const cardIcon = cardType === "card-yellow" ? "🟨 កាតលឿង" : "🟥 កាតក្រហម";
        showToast(
          `${cardIcon}`, 
          `${TEAMS[teamCode].flag} ${player} ទទួលបានកាតពីលោកអាជ្ញាកណ្តាល (${match.elapsed}')`
        );
      }
    }
  });
  
  if (stateChanged) {
    saveData();
    renderAll();
  }
}

// Random Football Scorer Names
const PLAYER_NAMES = {
  ARG: ["Lionel Messi", "Lautaro Martínez", "J. Alvarez", "E. Fernández"],
  FRA: ["K. Mbappé", "A. Griezmann", "O. Dembélé", "Marcus Thuram"],
  BEL: ["R. Lukaku", "K. De Bruyne", "L. Trossard", "J. Doku"],
  EGY: ["Mohamed Salah", "Mostafa Mohamed", "Omar Marmoush", "Trezeguet"],
  ESP: ["Alvaro Morata", "Lamine Yamal", "Nico Williams", "Pedri"],
  URU: ["D. Núñez", "F. Valverde", "L. Suárez", "R. Araujo"],
  KSA: ["Salem Al-Dawsari", "Firas Al-Buraikan", "Saleh Al-Shehri"],
  IRN: ["Mehdi Taremi", "Sardar Azmoun", "Alireza Jahanbakhsh"],
  NZL: ["Chris Wood", "Sarpreet Singh", "Kosta Barbarouses"],
  GER: ["J. Musiala", "F. Wirtz", "K. Havertz", "L. Sané"],
  POR: ["C. Ronaldo", "Bruno Fernandes", "Rafael Leão", "João Félix"],
  ENG: ["Harry Kane", "Jude Bellingham", "Bukayo Saka", "Phil Foden"],
  MEX: ["S. Giménez", "H. Lozano", "Luis Chávez"],
  USA: ["C. Pulisic", "F. Balogun", "T. Weah", "W. McKennie"],
  KOR: ["Son Heung-min", "Hwang Hee-chan", "Lee Kang-in"],
  JPN: ["K. Mitoma", "R. Doan", "A. Ueda", "T. Kubo"]
};

function getRandomPlayer(teamCode) {
  const players = PLAYER_NAMES[teamCode] || ["កីឡាករលេខ " + (Math.floor(Math.random() * 20) + 7)];
  return players[Math.floor(Math.random() * players.length)];
}

// Trigger CSS flash effect on scoring elements
function triggerScoreEffect(matchId, side) {
  setTimeout(() => {
    const el = document.getElementById(`score-${side}-${matchId}`);
    if (el) {
      el.classList.add("flash");
      setTimeout(() => el.classList.remove("flash"), 1200);
    }
  }, 100);
}

// Reset data to default
function setupAdminControls() {
  const resetBtn = document.getElementById("btn-reset-data");
  if (!resetBtn) return;
  
  resetBtn.addEventListener("click", () => {
    if (confirm("តើអ្នកចង់កំណត់កម្មវិធីឡើងវិញទៅលំនាំដើមមែនទេ? (លទ្ធផលដែលបានកែប្រែទាំងអស់នឹងត្រូវលុបចោល)")) {
      localStorage.removeItem("worldcup_2026_matches");
      initData();
      renderAll();
      showToast("បានកំណត់ឡើងវិញ", "ទិន្នន័យត្រូវបានកំណត់មកលំនាំដើមវិញហើយ!");
    }
  });
}

function getMatchHighlightUrl(match) {
  if (match.highlightUrl) {
    return match.highlightUrl;
  }
  
  const home = TEAMS[match.home];
  const away = TEAMS[match.away];
  
  // Use DuckDuckGo "I'm Feeling Ducky" shortcut (\) to redirect directly to the first search result on FIFA Watch,
  // preventing the search results page from showing up and taking the user straight to the video highlights.
  const query = `\\site:fifa.com/en/watch ${home.name_en} vs ${away.name_en} highlights`;
  return `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
}

// Open Video Highlight Modal
window.openHighlightModal = function(matchId) {
  const match = matches.find(m => m.id === matchId);
  if (!match) return;
  
  const url = getMatchHighlightUrl(match);
  window.open(url, '_blank');
};
