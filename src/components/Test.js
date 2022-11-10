import React from 'react';
let usersData = [
    {
        "id": 4226,
        "name": "Baladitya Patel",
        "email": "patel_baladitya@macejkovic.io",
        "gender": "male",
        "status": "inactive"
    },
    {
        "id": 4223,
        "name": "Amarnath Reddy",
        "email": "amarnath_reddy@bogan-veum.co",
        "gender": "female",
        "status": "active"
    },
      {
        "id": 'neki',
        "name": "Amarnath Reddy",
        "email": "neki-amarnath_reddy@bogan-veum.co",
        "gender": "female",
        "status": "active"
    },
    {
        "id": 4222,
        "name": "Mr. Harinarayan Ahluwalia",
        "email": "ahluwalia_mr_harinarayan@koelpin.com",
        "gender": "male",
        "status": "inactive"
    },
    {
        "id": 4220,
        "name": "Rep. Geeta Patil",
        "email": "geeta_patil_rep@quitzon-hessel.com",
        "gender": "female",
        "status": "active"
    },
    {
        "id": 4219,
        "name": "Mr. Anshula Patel",
        "email": "patel_anshula_mr@spencer-sauer.com",
        "gender": "male",
        "status": "inactive"
    },
    {
        "id": 4218,
        "name": "Miss Devi Khan",
        "email": "khan_miss_devi@emard-bechtelar.biz",
        "gender": "male",
        "status": "inactive"
    },
    {
        "id": 4216,
        "name": "Kumar Nayar",
        "email": "nayar_kumar@wiegand.com",
        "gender": "male",
        "status": "active"
    },
    {
        "id": 4215,
        "name": "Bhagavaan Dwivedi",
        "email": "bhagavaan_dwivedi@russel.biz",
        "gender": "male",
        "status": "active"
    },
    {
        "id": 4214,
        "name": "Chandak Pothuvaal",
        "email": "pothuvaal_chandak@schmitt.info",
        "gender": "male",
        "status": "inactive"
    },
    {
        "id": 4213,
        "name": "Dhyanesh Achari DC",
        "email": "dhyanesh_dc_achari@kerluke.org",
        "gender": "female",
        "status": "active"
    },
    {
        "id": 4212,
        "name": "Mr. Gangesh Jain",
        "email": "mr_jain_gangesh@daugherty-dietrich.org",
        "gender": "female",
        "status": "active"
    },
    {
        "id": 4211,
        "name": "Chaten Trivedi",
        "email": "trivedi_chaten@zemlak.co",
        "gender": "male",
        "status": "active"
    },
    {
        "id": 4209,
        "name": "Satish Singh",
        "email": "satish_singh@wisozk.net",
        "gender": "male",
        "status": "active"
    },
    {
        "id": 4208,
        "name": "Rep. Anala Menon",
        "email": "anala_rep_menon@adams-ziemann.co",
        "gender": "female",
        "status": "inactive"
    },
    {
        "id": 4207,
        "name": "Mrs. Lakshminath Gill",
        "email": "gill_lakshminath_mrs@ruecker-lockman.org",
        "gender": "male",
        "status": "active"
    },
    {
        "id": 4206,
        "name": "Mrs. Devani Mishra",
        "email": "mishra_devani_mrs@grimes.info",
        "gender": "male",
        "status": "active"
    },
    {
        "id": 4203,
        "name": "Dhanesh Gill",
        "email": "dhanesh_gill@fadel-ondricka.io",
        "gender": "female",
        "status": "inactive"
    },
    {
        "id": 4201,
        "name": "Dr. Hiranya Nambeesan",
        "email": "nambeesan_dr_hiranya@beatty.org",
        "gender": "male",
        "status": "inactive"
    },
    {
        "id": 4199,
        "name": "Adwitiya Mehrotra",
        "email": "adwitiya_mehrotra@waters.info",
        "gender": "female",
        "status": "inactive"
    },
    {
        "id": 4198,
        "name": "Kashyapi Jain",
        "email": "jain_kashyapi@ziemann.name",
        "gender": "male",
        "status": "active"
    }
]


export default function Test() {
    const [users, setUsers] = React.useState(usersData);
    const [filteredUsers, setFilteredUsers] = React.useState(usersData);

    function filterByGender(e) {
        const selectedGender = e.target.value;
        const newFilteredUsers = users.filter((user) => user.gender === selectedGender);
        setFilteredUsers(newFilteredUsers);
    }

    return (
        <div>
            <p>User List</p>
            <table>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>gender</th>
                </tr>
                {
                    filteredUsers.map((user) => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                        </tr>
                    ))
                }
            </table>
            <label name="gender">Choose a gender:</label>
            <select onChange={filterByGender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
    )
}