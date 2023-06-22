// Function to handle hover in
function handleHoverIn(event) {
    var gElement = event.currentTarget;
    var polygonElement = gElement.querySelector('polygon');
    var gId = gElement.getAttribute('id');
  
    // Change the fill color based on the g id when hovering
    if (gId === 'Five_Points' 
    || gId === 'Old_Redford' 
    || gId === 'Minock_Park'
    || gId === 'Westwood_Park'
    || gId === 'Grandmont'
    || gId === 'Sherwood_Forest'
    || gId === 'Palmer_Woods'
    || gId === 'Boston_Edison'
    || gId === 'New_Center'
    || gId === 'West_Village'
    || gId === 'English_Village'
    || gId === 'Corktown_Shores'
    || gId === 'Brush_Park'
    || gId === 'Lafayette_Park'
    || gId === 'Gold_Coast'
    || gId === 'Indian_Village'
    || gId === 'Hubbard_Farms'
    || gId === 'Eastern_Market'
    || gId === 'Pembroke'
    || gId === 'Littlefield'
    || gId === 'Barton_McFarland'
    || gId === 'Aviation_Subdivision'
    || gId === 'The_Eye'
    || gId === 'Herman_Gardens'
    || gId === 'Berg-Lahser'
    || gId === 'Belle_Isle'
    
    
    )
    {
      polygonElement.style.fill = 'rgba(255, 0, 0, 0.9)'; // Red fill color
    } else if 
      (gId === 'Russel_Woods' 
    || gId === 'Castle_Rouge' 
    || gId === 'Eliza_Howell'
    || gId === 'NW_Goldberg'
    || gId === 'Core_City'
    || gId === 'Woodbridge'
    || gId === 'Rivertown'
    || gId === 'Elmwood_Park'
    || gId === 'McDougall_Hunt'
    || gId === 'Islandview'
    || gId === 'Marina_District'
    || gId === 'Foch'
    || gId === 'Kettering'
    || gId === 'Poletown_East'
    || gId === 'Cass_Corridor'
    || gId === 'Corktown'
    || gId === 'Downtown'
    || gId === 'Midtown'
    || gId === 'Mexicantown'
    || gId === 'Delray'
    || gId === 'Franklin_Park'
    || gId === 'Brightmoor'

    
    
    ) {
      polygonElement.style.fill = 'rgba(34, 139, 34, 0.9)'; // Green fill color
    } else if 
      (gId === 'Milwaukee_Junction' 
    || gId === 'North_End' 
    || gId === 'Lasalle_Gardens'
    || gId === 'Arden_Park'
    || gId === 'Petosky-Otsego'
    || gId === 'Dexter-Linwood'
    || gId === 'Hope_Village'
    || gId === 'Martin_Park'
    || gId === 'University_District'
    || gId === 'Detroit_Golf'
    || gId === 'Palmer_Park'
    || gId === 'Grixdale_Farms'
    || gId === 'NorHam'
    || gId === 'Davison'
    || gId === 'State_Fair'
    || gId === 'Grixdale'
    || gId === 'Conant_Gardens'
    || gId === 'Krainz_Woods'
    || gId === 'Grand_Meyer'
    || gId === 'Boynton'
    || gId === 'Chadsey'
    || gId === 'Greenfield-Grand_River'
    || gId === 'Belmont'
    || gId === 'River_Rouge'
    || gId === 'Riverdale'
    || gId === 'North_Rosedale_Park'
    || gId === 'Greenfield'
    
    ) {
      polygonElement.style.fill = 'rgba(255, 255, 0, 0.9)';      // Yellow fill color
    } else if 
      (gId === 'Nortown' 
    || gId === 'City_Airport' 
    || gId === 'Osborn'
    || gId === 'Regent_Park'
    || gId === 'Burbank'
    || gId === 'Lasalle_College_Park'
    || gId === 'Ravendale'
    || gId === 'Denby'
    || gId === 'St_Jean'
    || gId === 'Chandler_Park'
    || gId === 'Morningside'
    || gId === 'East_English_Village'
    || gId === 'Balduck_Hill'
    || gId === 'Jefferson-Mack'
    || gId === 'Jefferson_Chalmers'
    || gId === 'West_Side_Industrial'
    || gId === 'North_Corktown'
    || gId === 'Green_Acres'
    || gId === 'Bagley'
    || gId === 'Fritzgerald'
    || gId === 'Southwest'
    || gId === 'Springwells_Village'
    || gId === 'Oakwood_Heights'
    || gId === 'Condon'
    || gId === 'Fiskorn'
    || gId === 'Grandmont_Rosedale'
    || gId === 'Rosedale_Park'
    || gId === 'Seven_Mile_Evergreen'
    || gId === 'Grandale'
    || gId === 'Warrendale'
    
    
    ) {
      polygonElement.style.fill = 'rgba(0, 0, 255, 0.9)'; // Blue fill color
    }
    
  }
  
  // Function to handle hover out
  function handleHoverOut(event) {
    var polygonElement = event.currentTarget.querySelector('polygon');
    polygonElement.style.fill = ''; // Reset fill color
  }
  
  // Get all the <g> elements by their ids
  var gElements = document.querySelectorAll
  ('#Five_Points, #Old_Redford, #Minock_Park, #Westwood_Park, #Grandmont, #Sherwood_Forest, #Palmer_Woods, #Boston_Edison, #New_Center, #West_Village, #English_Village, #Corktown_Shores, #Brush_Park, #Lafayette_Park, #Gold_Coast, #Indian_Village, #Hubbard_Farms, #Eastern_Market, #Russel_Woods, #Castle_Rouge, #Eliza_Howell, #NW_Goldberg, #Core_City, #Woodbridge, #Rivertown, #Elmwood_Park, #McDougall_Hunt, #Islandview, #Marina_District, #Foch, #Kettering, #Poletown_East, #Cass_Corridor, #Corktown, #Downtown, #Midtown, #Milwaukee_Junction, #North_End, #Lasalle_Gardens, #Arden_Park, #Petosky-Otsego, #Dexter-Linwood, #Hope_Village, #Martin_Park, #University_District, #Detroit_Golf, #Palmer_Park, #Grixdale_Farms, #NorHam, #State_Fair, #Grixdale, #Conant_Gardens, #Krainz_Woods, #Nortown, #City_Airport, #Osborn, #Regent_Park, #Burbank, #Lasalle_College_Park, #Ravendale, #Denby, #St_Jean, #Chandler_Park, #Morningside, #East_English_Village, #Balduck_Hill, #Jefferson-Mack, #Jefferson_Chalmers, #West_Side_Industrial, #North_Corktown, #Green_Acres, #Pembroke, #Bagley, #Fritzgerald, #Littlefield, #Grand_Meyer, #Southwest, #Mexicantown, #Delray, #Springwells_Village, #Oakwood_Heights, #Boynton, #Condon, #Chadsey, #Barton_McFarland, #Aviation_Subdivision, #Fiskorn, #Greenfield-Grand_River, #Belmont, #Grandmont_Rosedale, #Rosedale_Park, #The_Eye, #Seven_Mile_Evergreen, #Grandale, #Herman_Gardens, #Franklin_Park, #Warrendale, #River_Rouge, #Davison, #Brightmoor, #Riverdale, #Greenfield, #Berg-Lahser, #North_Rosedale_Park, #Belle_Isle');
  
  // Attach event listeners to each <g> element for hover in and hover out
  gElements.forEach(function(gElement) {
    gElement.addEventListener('mouseenter', handleHoverIn);
    gElement.addEventListener('mouseleave', handleHoverOut);
  });
  
  
  // Add zoom functionality
  function handleResize() {
    var svgElement = document.getElementById('svg');
    var svgContainer = document.getElementById('svg-container');
    
    var containerWidth = svgContainer.clientWidth;
    var svgWidth = svgElement.getAttribute('width');
    var scaleFactor = containerWidth / svgWidth;
    
    svgElement.style.transform = 'scale(' + scaleFactor + ')';
}

window.addEventListener('resize', handleResize);
