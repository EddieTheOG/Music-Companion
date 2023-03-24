import { Link } from 'react-router-dom';

function ConfirmationPage() {
  return (
    <div className="confirmation-page">
      <p>
        Thanks for Registering! Enjoy your time with Music Companion click{' '}
        <Link to="/exercises">Here</Link> to head to the exercises.
      </p>
    </div>
  );
}

export default ConfirmationPage;
