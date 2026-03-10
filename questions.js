const questionBank = [

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "An organization manages more than 150,000 endpoints across multiple continents and needs real-time visibility of endpoint data.",
        question: "What Tanium architecture allows responses from thousands of endpoints in seconds?",
        answers: [
            "Peer-to-peer linear chain architecture",
            "Centralized hub-and-spoke polling",
            "Broadcast network queries",
            "Direct SQL queries to endpoints"
        ],
        correct: 0,
        explanation: "Tanium uses a linear peer-to-peer chain architecture where each endpoint passes data to the next, minimizing network traffic and allowing rapid responses."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "A Tanium operator wants to retrieve real-time information from endpoints.",
        question: "Which Tanium object collects data from endpoints?",
        answers: [
            "Sensor",
            "Package",
            "Label",
            "Board"
        ],
        correct: 0,
        explanation: "Sensors collect data from endpoints and return the results to the Tanium platform."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "A security engineer needs to run a remediation script on multiple endpoints.",
        question: "Which Tanium object executes commands or scripts on endpoints?",
        answers: [
            "Package",
            "Sensor",
            "Saved Question",
            "Trend"
        ],
        correct: 0,
        explanation: "Packages contain scripts or commands that are executed on endpoints during actions."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "A Tanium user needs to ask questions and retrieve live endpoint data.",
        question: "Which Tanium module allows users to ask real-time questions?",
        answers: [
            "Interact",
            "Connect",
            "Deploy",
            "Asset"
        ],
        correct: 0,
        explanation: "Interact is the core module used to ask questions and retrieve data from endpoints."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "An IT asset management team wants a full inventory of hardware and software in the environment.",
        question: "Which module provides asset inventory capabilities?",
        answers: [
            "Asset",
            "Deploy",
            "Connect",
            "Trends"
        ],
        correct: 0,
        explanation: "The Asset module collects and organizes endpoint inventory information."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "A security engineer needs to detect unmanaged devices connected to the network.",
        question: "Which Tanium module identifies unmanaged endpoints?",
        answers: [
            "Discover",
            "Asset",
            "Deploy",
            "Interact"
        ],
        correct: 0,
        explanation: "Discover scans the network to detect devices that are not yet managed by Tanium."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "A SOC team wants to send endpoint data from Tanium into a SIEM platform.",
        question: "Which module exports Tanium data to external systems?",
        answers: [
            "Connect",
            "Interact",
            "Deploy",
            "Trends"
        ],
        correct: 0,
        explanation: "Connect exports Tanium data to external platforms such as SIEMs or databases."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "Executives want to visualize endpoint data trends over time.",
        question: "Which module provides graphical dashboards and trend analysis?",
        answers: [
            "Trends",
            "Connect",
            "Deploy",
            "Interact"
        ],
        correct: 0,
        explanation: "The Trends module provides dashboards and historical data visualizations."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An administrator must restrict which users can run remediation actions.",
        question: "Which security model controls permissions in Tanium?",
        answers: [
            "Role-Based Access Control (RBAC)",
            "Firewall policy",
            "Network ACL",
            "Endpoint privilege model"
        ],
        correct: 0,
        explanation: "RBAC allows administrators to control which users can perform specific actions."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A SOC analyst wants to view currently running processes on endpoints.",
        question: "Which sensor returns running processes?",
        answers: [
            "Running Processes",
            "Active Tasks",
            "Process Status",
            "System Tasks"
        ],
        correct: 0,
        explanation: "The Running Processes sensor retrieves information about currently running processes."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An administrator needs to verify available disk space across endpoints.",
        question: "Which sensor provides disk free space information?",
        answers: [
            "System Disk Free Space",
            "Disk Status",
            "Drive Inventory",
            "Storage Monitor"
        ],
        correct: 0,
        explanation: "The System Disk Free Space sensor reports available disk space on endpoints."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An IT team wants to identify installed applications on endpoints.",
        question: "Which sensor returns software inventory?",
        answers: [
            "Installed Applications",
            "Program Inventory",
            "Software Monitor",
            "Application List"
        ],
        correct: 0,
        explanation: "Installed Applications lists software installed on endpoints."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "A security analyst wants to know which endpoints are currently online.",
        question: "Which sensor indicates endpoint availability?",
        answers: [
            "Online",
            "Endpoint Status",
            "Active Machines",
            "Host Availability"
        ],
        correct: 0,
        explanation: "The Online sensor returns whether the endpoint is currently responding."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A company wants to store endpoint data historically for analysis.",
        question: "Which Tanium component stores historical data?",
        answers: [
            "Tanium Data Service",
            "Tanium Router",
            "Tanium Client",
            "Tanium Engine"
        ],
        correct: 0,
        explanation: "Tanium Data Service stores endpoint data for historical analysis and reporting."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An administrator needs to dynamically group endpoints by operating system.",
        question: "Which Tanium feature enables dynamic grouping?",
        answers: [
            "Labels",
            "Packages",
            "Sensors",
            "Boards"
        ],
        correct: 0,
        explanation: "Labels dynamically group endpoints based on sensor data."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A Connect job is exporting data to Splunk.",
        question: "Which component defines where the exported data is sent?",
        answers: [
            "Destination",
            "Source",
            "Sensor",
            "Board"
        ],
        correct: 0,
        explanation: "Destination defines where the exported data is sent in Connect jobs."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A Connect job must define which Tanium data will be exported.",
        question: "Which component defines the data origin?",
        answers: [
            "Source",
            "Package",
            "Trend",
            "Board"
        ],
        correct: 0,
        explanation: "Source defines the origin of the data exported by Connect."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A Tanium user wants to investigate results from a previous query.",
        question: "Which feature allows deeper investigation of results?",
        answers: [
            "Drill Down",
            "Trace Query",
            "Expand Sensor",
            "Deep Search"
        ],
        correct: 0,
        explanation: "Drill Down allows users to further investigate subsets of query results."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An IT team must deploy software updates to endpoints.",
        question: "Which Tanium module handles software deployment?",
        answers: [
            "Deploy",
            "Interact",
            "Connect",
            "Trends"
        ],
        correct: 0,
        explanation: "Deploy manages software and patch deployments."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "During an incident response, an analyst must run commands on a compromised endpoint.",
        question: "Which capability allows remote command execution?",
        answers: [
            "Live Response",
            "Deploy",
            "Connect",
            "Asset"
        ],
        correct: 0,
        explanation: "Live Response allows interactive command execution during investigations."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A company wants to reduce WAN traffic when querying endpoints globally.",
        question: "Which architectural feature minimizes network traffic?",
        answers: [
            "Peer-to-peer communication between endpoints",
            "Central query server",
            "Broadcast queries",
            "Network proxy relays"
        ],
        correct: 0,
        explanation: "Tanium clients communicate peer-to-peer in a linear chain."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "An analyst needs to retrieve endpoint hostname information.",
        question: "Which sensor returns the hostname?",
        answers: [
            "Computer Name",
            "Host Identifier",
            "Endpoint Host",
            "Machine Label"
        ],
        correct: 0,
        explanation: "Computer Name returns the hostname of endpoints."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "A Tanium user wants to know the IP addresses of endpoints.",
        question: "Which sensor returns this information?",
        answers: [
            "IP Address",
            "Network Endpoint",
            "Host Address",
            "System Network"
        ],
        correct: 0,
        explanation: "IP Address returns the network IP address of endpoints."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An administrator wants to filter queries to only Windows endpoints.",
        question: "Which Interact clause applies this filter?",
        answers: [
            "with Is Windows equals true",
            "with OS contains Windows",
            "with Platform Windows",
            "with Endpoint OS Windows"
        ],
        correct: 0,
        explanation: "Filtering is performed using the 'with' clause combined with sensors."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "A Tanium operator wants to reuse a query frequently.",
        question: "Which feature allows saving a query?",
        answers: [
            "Saved Question",
            "Deploy Package",
            "Trend Report",
            "Connect Source"
        ],
        correct: 0,
        explanation: "Saved Questions allow queries to be reused."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A remediation task must run at a scheduled time.",
        question: "Which Tanium capability schedules actions?",
        answers: [
            "Action",
            "Sensor",
            "Board",
            "Label"
        ],
        correct: 0,
        explanation: "Actions execute packages and can be scheduled."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A team wants to limit a query to a defined set of endpoints.",
        question: "Which Tanium feature defines endpoint scope?",
        answers: [
            "Computer Groups",
            "Boards",
            "Deploy Packages",
            "Connect Destinations"
        ],
        correct: 0,
        explanation: "Computer Groups define endpoint scope."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A Tanium user wants to retrieve both hostname and IP address in one query.",
        question: "What is the correct approach?",
        answers: [
            "Ask multiple sensors in one question",
            "Run two separate packages",
            "Create two deploy jobs",
            "Export results via Connect"
        ],
        correct: 0,
        explanation: "Multiple sensors can be included in one query."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An analyst needs to investigate suspicious files on endpoints.",
        question: "Which capability allows direct endpoint investigation?",
        answers: [
            "Live Response",
            "Deploy",
            "Connect",
            "Asset"
        ],
        correct: 0,
        explanation: "Live Response provides investigation capabilities."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A SOC team wants to check endpoints missing Windows patches.",
        question: "Which module manages patch deployment?",
        answers: [
            "Deploy",
            "Interact",
            "Asset",
            "Connect"
        ],
        correct: 0,
        explanation: "Deploy manages patch and software updates."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "An administrator wants to count how many machines have Chrome installed.",
        question: "Which module is used to ask this question?",
        answers: [
            "Interact",
            "Deploy",
            "Connect",
            "Trends"
        ],
        correct: 0,
        explanation: "Interact runs endpoint queries."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An administrator wants to restrict actions to Linux endpoints.",
        question: "Which query clause filters Linux machines?",
        answers: [
            "with Is Linux equals true",
            "with OS contains Linux",
            "with Platform Linux",
            "with Endpoint Linux true"
        ],
        correct: 0,
        explanation: "Filtering uses sensors with 'with' clauses."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A company wants to visualize endpoint metrics historically.",
        question: "Which module provides trend dashboards?",
        answers: [
            "Trends",
            "Interact",
            "Deploy",
            "Connect"
        ],
        correct: 0,
        explanation: "Trends provides dashboards and time-based charts."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An analyst wants to determine the operating system of endpoints.",
        question: "Which sensor returns this information?",
        answers: [
            "Operating System",
            "System Version",
            "OS Inventory",
            "Platform Sensor"
        ],
        correct: 0,
        explanation: "Operating System sensor returns the OS information."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An administrator needs to identify machines missing antivirus software.",
        question: "Which approach should be used?",
        answers: [
            "Query a sensor that returns antivirus status",
            "Run a Deploy package",
            "Export endpoint data",
            "Create a Trend report"
        ],
        correct: 0,
        explanation: "Sensors should be queried to determine antivirus presence."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An analyst wants to identify endpoints that have not checked in recently.",
        question: "Which sensor helps determine this?",
        answers: [
            "Last Seen",
            "Endpoint Time",
            "Agent Status",
            "Machine Sync"
        ],
        correct: 0,
        explanation: "Last Seen shows the last time the endpoint communicated with Tanium."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An administrator wants to automatically export endpoint data daily.",
        question: "Which module handles scheduled exports?",
        answers: [
            "Connect",
            "Deploy",
            "Interact",
            "Asset"
        ],
        correct: 0,
        explanation: "Connect schedules exports of Tanium data."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A Tanium query returns thousands of endpoints.",
        question: "Which feature helps narrow the results?",
        answers: [
            "Filter clause",
            "Deploy package",
            "Trend report",
            "Connect export"
        ],
        correct: 0,
        explanation: "Filter clauses limit results based on sensor values."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An IT engineer wants to deploy a configuration change.",
        question: "Which Tanium object contains the script executed on endpoints?",
        answers: [
            "Package",
            "Sensor",
            "Board",
            "Trend"
        ],
        correct: 0,
        explanation: "Packages contain scripts or commands."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A SOC team wants to isolate a compromised endpoint.",
        question: "Which capability can execute containment actions?",
        answers: [
            "Deploy",
            "Connect",
            "Asset",
            "Discover"
        ],
        correct: 0,
        explanation: "Deploy actions can run containment scripts."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An analyst wants to identify machines missing a specific application.",
        question: "Which capability helps detect this condition?",
        answers: [
            "Interact query",
            "Trend dashboard",
            "Deploy job",
            "Connect export"
        ],
        correct: 0,
        explanation: "Interact queries sensors to detect application presence."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An administrator wants to group endpoints dynamically based on installed software.",
        question: "Which Tanium feature enables this?",
        answers: [
            "Labels",
            "Packages",
            "Boards",
            "Deploy"
        ],
        correct: 0,
        explanation: "Labels dynamically group endpoints."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "A SOC analyst needs quick real-time endpoint visibility.",
        question: "Which Tanium capability provides this?",
        answers: [
            "Interact",
            "Connect",
            "Deploy",
            "Trends"
        ],
        correct: 0,
        explanation: "Interact provides real-time endpoint visibility."
    },

    {
        type: "multiple",
        difficulty: "easy",
        scenario: "An administrator wants to identify which machines are currently online.",
        question: "Which sensor returns this status?",
        answers: [
            "Online",
            "Machine Status",
            "Endpoint Presence",
            "Active Endpoint"
        ],
        correct: 0,
        explanation: "The Online sensor indicates endpoint availability."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An analyst wants to create a report showing operating system distribution.",
        question: "Which module is best suited for visualization?",
        answers: [
            "Trends",
            "Interact",
            "Deploy",
            "Connect"
        ],
        correct: 0,
        explanation: "Trends provides visual reports."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A Tanium administrator wants to control which users can ask questions in Interact.",
        question: "Which feature enforces these permissions?",
        answers: [
            "RBAC",
            "Endpoint policies",
            "Network ACL",
            "Firewall rules"
        ],
        correct: 0,
        explanation: "RBAC controls user permissions."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A Tanium operator needs to run a command across thousands of endpoints immediately.",
        question: "What is executed when a package is triggered?",
        answers: [
            "Action",
            "Sensor",
            "Trend",
            "Label"
        ],
        correct: 0,
        explanation: "Packages run when executed through an Action."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A Connect job is configured to send data to Splunk.",
        question: "What defines the system receiving the data?",
        answers: [
            "Destination",
            "Source",
            "Sensor",
            "Board"
        ],
        correct: 0,
        explanation: "Destination specifies the receiving system."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An analyst wants to retrieve endpoint CPU information.",
        question: "Which sensor could return this data?",
        answers: [
            "Processor",
            "CPU Inventory",
            "System CPU",
            "Hardware CPU"
        ],
        correct: 0,
        explanation: "Processor sensor returns CPU information."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An organization needs a full list of endpoints discovered on the network.",
        question: "Which module identifies devices not yet managed by Tanium?",
        answers: [
            "Discover",
            "Asset",
            "Deploy",
            "Interact"
        ],
        correct: 0,
        explanation: "Discover identifies unmanaged devices."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A Tanium user wants to schedule a query to run regularly.",
        question: "Which feature supports repeated execution?",
        answers: [
            "Scheduled Action",
            "Trend Automation",
            "Sensor Loop",
            "Label Rule"
        ],
        correct: 0,
        explanation: "Scheduled actions allow recurring tasks."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An administrator wants to retrieve both OS and IP address.",
        question: "Which query structure is correct?",
        answers: [
            "Ask Operating System and IP Address from all machines",
            "Get OS then run IP query",
            "Deploy package to collect OS",
            "Export OS via Connect"
        ],
        correct: 0,
        explanation: "Multiple sensors can be included in a single question."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A security engineer wants to investigate endpoints during an incident.",
        question: "Which capability allows interactive investigation?",
        answers: [
            "Live Response",
            "Deploy",
            "Asset",
            "Trends"
        ],
        correct: 0,
        explanation: "Live Response provides interactive endpoint investigation."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "An analyst wants to view historical endpoint metrics.",
        question: "Which module provides time-based charts?",
        answers: [
            "Trends",
            "Interact",
            "Deploy",
            "Connect"
        ],
        correct: 0,
        explanation: "Trends displays time-based charts."
    },

    {
        type: "multiple",
        difficulty: "medium",
        scenario: "A Tanium operator wants to identify endpoints running outdated software.",
        question: "Which approach is most appropriate?",
        answers: [
            "Query version sensors via Interact",
            "Deploy a patch package",
            "Export endpoint data",
            "Create a trend chart"
        ],
        correct: 0,
        explanation: "Sensors returning software version should be queried through Interact."
    }

]