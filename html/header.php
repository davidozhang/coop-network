<div class= "header" >
	<div class="nav-background"></div>
	<img id="title-image" src="/img/logo-title.png" draggable="false">
	<img id="filter-image" src="/img/filter-slide.png" draggable="false" style="-moz-user-select: none;">
	<div class="filter-background notDisplayed">
		<table class="table filter-table" id='searchResults'>
			<tr>
				<td>Level</td>
				<td><input type="radio" name="level" id="level0" checked>  None</td>
				<td>Jobtitle</td>
				<td><input type="text" id="filter-text"></td>
				
			</tr>
			<tr>
				<td><input type="radio" name="level" id="level1">  Coop Junior</td>
				<td><input type="radio" name="level" id="level4">  Bachelor</td>
				<td>Discipline</td>
				<td>
					<select id="filter-discipline">
						<option value="All">All</option>
						<option value="Tron">ENG - Mechatronics</option>
						<option value="SE">ENG - Software</option>
						<option value="CompSci">MATH - Computer</option>
					</select>		
				</td>
			
			</tr>
			<tr>
				<td><input type="radio" name="level" id="level2">  Coop Intermediate</td>
				<td><input type="radio" name="level" id="level5">  Masters</td>

			</tr>
			<tr>
				<td><input type="radio" name="level" id="level3">  Coop Senior</td>
				<td><input type="radio" name="level" id="level6">  Ph.D.</td>
	
			</tr>
		</table>
		<button type="submit" class="btn btn-default clearButton" >Clear</button>
		<button type="submit" class="btn btn-default filter-search" >Submit</button>

	</div>
	<input type="text" class="form-control" placeholder="Search Employer or Location" id = 'searchField' >
	<button type="submit" class="btn btn-default searchButton" id = 'searchButton'>Submit</button>
	<!--<div class="btn-group">
		<button type="button" class="btn btn-default search" id="searchButton">Search</button>
	</div>
	
	<div class = "filters">
		<form class="navbar-form navbar-left" role="search">
			<div class="form-group">
	    		<p></p><input type="text" class="form-control" placeholder="Employer">
			</div><br>
			<div class="form-group">
				<p></p><input type="text" class="form-control" placeholder="Job Title">
			</div><br>
			<div class="form-group">
				<p></p><input type="text" class="form-control" placeholder="Location">
			</div><br>
			<div class="form-group">
				<p></p><input type="text" class="form-control" placeholder="Salary">
			</div><br>
			<div class="form-group">
				<p></p><input type="text" class="form-control" placeholder="Rating">
			</div><br>
			<button type="submit" class="btn btn-default">Submit</button>
		</form>
	</div> -->
</div>
