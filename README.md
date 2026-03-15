# Visit Oman

An intelligent travel planner that recommends destinations in Oman based on user preferences such as interests, travel month, budget, and trip duration.

The system uses a multi-factor scoring algorithm and several planning strategies to generate a personalized travel itinerary.

---

# Project Overview

This project helps travelers discover destinations in Oman and automatically generates a trip plan.

The planner considers:

* User interests (categories)
* Travel month
* Budget tier
* Trip duration
* Travel intensity

Using these inputs, the system ranks destinations and builds a daily itinerary.

---

# Features Implemented

### User Preference Form

Users provide travel preferences including:

* Trip duration
* Budget tier
* Travel month
* Travel intensity
* Preferred categories (nature, beach, culture, food, etc.)

---

### Favorites System

Users can save destinations to favorites.

* Stored using **Zustand**
* Persisted in **LocalStorage**
* Favorites are prioritized when generating the trip

---

### Destination Filtering

Destinations can be filtered by:

* Category
* Season
* Cost
* Crowd level

---

# Core Algorithms

The recommendation system is built using several algorithms.

---

## 1. Jaccard Similarity

Measures similarity between:

User interests
and
Destination categories

Formula:

Intersection / Union

Example:

User categories:

```
["nature", "beach"]
```

Destination categories:

```
["beach", "food"]
```

Similarity score:

```
1 / 3 = 0.33
```

---

## 2. Destination Scoring Algorithm

Each destination receives a score based on multiple factors.

```
score =
(interestScore × 0.4) +
(seasonScore × 0.3) -
(crowdPenalty × 0.15) -
(costPenalty × 0.15)
```

Factors used:

* Interest similarity
* Recommended travel season
* Crowd level
* Estimated cost

This produces a ranked list of destinations.

---

## 3. Top Destination Selection

After scoring:

* Destinations are sorted by score
* Top results are selected for planning

This ensures the itinerary uses the best matching destinations.

---

## 4. Region Allocation Algorithm

Destinations are grouped by region to avoid recommending locations only in a single area.

Example regions:

* Muscat
* Dakhiliya
* Sharqiya
* Dhofar

The algorithm ranks regions based on the average destination score.

This ensures geographic diversity in the trip.

---

## 5. Daily Itinerary Builder

The system generates a day-by-day travel plan.

Stops per day depend on **travel intensity**:

| Intensity | Stops per day |
| --------- | ------------- |
| Relaxed   | 2             |
| Balanced  | 3             |
| Intense   | 4             |

Example output:

Day 1

* Mutrah Souq
* Sultan Qaboos Grand Mosque

Day 2

* Nizwa Fort
* Nizwa Souq

Day 3

* Wadi Shab
* Bimmah Sinkhole

---

# Tech Stack

### Framework

* Next.js (App Router)
* React
* TypeScript

### Styling

* Tailwind CSS

### State Management

* Zustand
* LocalStorage persistence

### Libraries

* React Hook Form — form handling and validation
* React Toastify — notifications and feedback messages
* React Leaflet — interactive map integration
* React Icons — UI icons

---

# Data Tracking (Anonymous)

User interactions are stored locally without collecting personal information.

Tracked data includes:

* User preferences
* Selected filters
* Favorite destinations
* Generated travel plans

This helps analyze usage patterns without identifying the user.

---

# Future Improvements

* Distance-aware itinerary planning
* Visit duration optimization
* Map integration
* AI travel assistant 
* Crowd prediction model

---

# Author

Khalid Alhadi
