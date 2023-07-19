import React from 'react'
import { Link } from 'react-router-dom';
import "./Error.scss"
const ErrorPage = () => {
  return (
    <div>
      <section class="page_404">
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
	
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
    <Link to="/"> <button className="link_404">Go Home</button></Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default ErrorPage
