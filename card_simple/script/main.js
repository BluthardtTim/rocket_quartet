$(document).ready(function (){
    data.forEach(rocket => {
        const wrapper = $('#wrapper');
        const card = $(` <div class="card">
        <div class="card-content">
        <div class="card-number">${rocket.group_letter}${rocket.number}</div>
        <div class="card-title">
            <div class="card-name">${rocket.name}</div>
            <div class="card-group">${rocket.group}</div>
        </div>
        <div class="rocket-image"><img src="images/voyager.webp" alt=""></div>
        <div class="goal-icon">Goal</div>
        <div class="rocket-goal">${rocket.mission_goal}</div>
        
        <div class="stat-icon">mission duration</div>
        <div class="stat-value">${rocket.mission_duration}</div>
        
        <div class="stat-icon">max earth distance</div>
        <div class="stat-value">${rocket.max_earth_distance}</div>
        
        <div class="stat-icon">delvelopment cost</div>
        <div class="stat-value">${rocket.development_cost}</div>
        
        <div class="stat-icon">weight</div>
        <div class="stat-value">${rocket.weight}</div>
        
        <div class="stat-icon">year build</div>
        <div class="stat-value">${rocket.year_built}</div>
        
        <div class="stat-icon">max speed</div>
        <div class="stat-value">${rocket.max_speed}</div>
        
        </div>`)
        wrapper.append(card);
    });
})





