import React from "react"
import ReactDOM from "react-dom/client"

/**
      * Planning the App components
      *  - Header
      *      - Logo
      *      - Nav Items (Cart)
      *      - Cart
      *  - Body
      *      - Search Bar
      *      - Restaurant List
      *          - Restaurant Card
      *              - Image
      *              - Name
      *              - Restaurant info (Cuisine)
      *              - Price
      *              - Star rating
      *  - Footer
      *      - Reference Links
      *      - Copyrights
      */

const Title = () => {
  return (
    <a href="/">
      <img className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZbPUWQIQ8CEwuTrWpEIo8kgEPj_HO0FunPO4O3_lrWConeJw1cXBE9LdLMuZ1-s6s2A&usqp=CAU"
        alt="Title-logo" />
    </a>

  )
}

const Header = () => {
  return (
    <div className="header" style={{ "backgroundColor": "lightgray" }} >
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const burgerKing = {
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dmi0pdcwjddzhlboew9g",
  name: "Burger King",
  cuisines: ["Burgers", "American"],
  rating: "4.2"
}

const restaurantList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "18975",
      "name": "Nandhana Palace",
      "uuid": "9579be4f-273a-4c60-be5e-a0bf2484395a",
      "city": "1",
      "area": "Rajajinagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "n1ibhuge75vzzhu8db8v",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian"
      ],
      "tags": [

      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 2.5999999046325684,
      "slugs": {
        "restaurant": "nandhana-palace-rajajinagar-rajajinagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "NO.1 , 5TH MAIN ROAD , SHIVANAHALLI , RAJAJI NAGAR , BENGALURU ,RAJAJINAGARA , B.B.M.P WEST ( KARNATAKA)",
      "locality": "Shivanahalli",
      "parentId": 2120,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5629431~p=4~eid=00000185-9c87-7af8-23f2-022c00310430",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "18975",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 2.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "288893",
      "name": "Meghana Foods",
      "uuid": "f0d470e8-1e64-473d-8af0-7745045daddb",
      "city": "1",
      "area": "Rajajinagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "slheenytwb3iaypqf4yd",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood"
      ],
      "tags": [

      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 4.199999809265137,
      "slugs": {
        "restaurant": "meghana-foods-rajajinagar-rajajinagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Unnati Arcade, Muncipal, No. 5/111 1st Main road, Rajkumar road, 1st block Rajajinagar ,Blr - 10",
      "locality": "Dr. Rajkumar Road",
      "parentId": 635,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "4.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "288893",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 4.199999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "63300",
      "name": "Hotel Empire",
      "uuid": "b0248597-8629-4dc5-9437-098dbcea427a",
      "city": "1",
      "area": "Rajajinagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "ervram6kki8b97it2ulr",
      "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
      ],
      "tags": [

      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 4,
      "slugs": {
        "restaurant": "hotel-empire-rajajinagar-rajajinagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#701,sri lakshmi narayan arcade,modi hospital road,west of chord road,mahalakshmi puram, bangalore - 560086",
      "locality": "West Of Chord Road",
      "parentId": 475,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "63300",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 4,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "40227",
      "name": "Le Arabia",
      "uuid": "59fd6551-c120-4337-b0e0-65e059eb54ef",
      "city": "1",
      "area": "Basaveshwar Nagar",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "s2tcja1qsmkhkxkcly7z",
      "cuisines": [
        "Arabian",
        "Beverages",
        "Biryani",
        "Chinese",
        "Desserts",
        "Seafood",
        "Hyderabadi",
        "Ice Cream",
        "Afghani",
        "Grill",
        "Tandoor"
      ],
      "tags": [

      ],
      "costForTwo": 57000,
      "costForTwoString": "₹570 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 2.5,
      "slugs": {
        "restaurant": "le-arabia-basaveshwara-nagar-rajajinagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "881/B-1, 2nd Stage, WOC Road, Basaveshwaranagar, Bengaluru, Karnataka 560086",
      "locality": "Basaveshwara Nagar",
      "parentId": 7457,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5688700~p=7~eid=00000185-9c87-7af8-23f2-022d0031073e",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "40227",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "196047",
      "name": "New Taj Darbar",
      "uuid": "94a6fc19-e819-4450-b52f-a96c5a32d565",
      "city": "1",
      "area": "Shivajinagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "nfieyqgxk1omknxfbluj",
      "cuisines": [
        "Biryani",
        "Indian",
        "Chinese",
        "Tandoor",
        "Seafood"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 41,
      "minDeliveryTime": 41,
      "maxDeliveryTime": 41,
      "slaString": "41 MINS",
      "lastMileTravel": 8.899999618530273,
      "slugs": {
        "restaurant": "new-taj-darbar-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "New Taj Darbar, Shivaji Nagar, Bengaluru, Karnataka, India",
      "locality": "Saint Mary's Church Road",
      "parentId": 148190,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
          {
            "meta": "30% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "8.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "196047",
        "deliveryTime": 41,
        "minDeliveryTime": 41,
        "maxDeliveryTime": 41,
        "lastMileTravel": 8.899999618530273,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "409528",
      "name": "ITC Master Chef Creations",
      "uuid": "97496bf4-6904-4d55-b4fc-d89a67307b3e",
      "city": "1",
      "area": "Rajaji Nagar",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "ws5bdylemchmfvmruvgt",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Indian",
        "Punjabi",
        "Chaat",
        "Kebabs",
        "Tandoor",
        "Mughlai",
        "Desserts",
        "Snacks"
      ],
      "tags": [

      ],
      "costForTwo": 65000,
      "costForTwoString": "₹650 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 1.7000000476837158,
      "slugs": {
        "restaurant": "itc-master-chef-creations-bindu-galaxy-rajajinagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Counter 2,Kitchens@Rajaji Nagar,205,No 2,bindu Galaxy,1st Main rd,Rajaji Nagar industrial town,bengaluru,karnataka-560054",
      "locality": "Rajaji Nagar industrial town",
      "parentId": 11992,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5701310~p=10~eid=00000185-9c87-7af8-23f2-022e00310a53",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "409528",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 1.7000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "46647",
      "name": "Ayodhya Upachar",
      "uuid": "ce3fa965-bb59-4850-8cf6-eac332f8c674",
      "city": "1",
      "area": "Banashankari",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "fyx10gm1sfvbfmrgdtb2",
      "cuisines": [
        "Chinese",
        "Desserts",
        "North Indian",
        "South Indian",
        "Chaat"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 6.800000190734863,
      "slugs": {
        "restaurant": "ayodhya-upachar-banashankari-banashankari",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#199. Outer ring road.janatha bazaar bus stop .Kathriguppe.Bangalore",
      "locality": "Kathriguppe",
      "parentId": 370539,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 6500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 6500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "6.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "46647",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 6.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  }
]

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, lastMileTravelString }) => {
  // console.log(restaurant)
  // const { cloudinaryImageId, name, cuisines, lastMileTravelString } = restaurant
  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        + cloudinaryImageId} alt="card-img" />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="restaurant-list">
      {
        restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        })
      }
    </div>
  )
}


const Footer = () => {
  return <h2>Footer</h2>
}

const AppLayout = () => {
  return (
    <>
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)