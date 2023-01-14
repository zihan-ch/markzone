import { Dashboard } from "~lc/Dashboard"
import { withDash } from "~/utils/dash"

export const [routeData, DashboardPage] = withDash((props) => {
	return (
		<>
			<Dashboard user={props.session.user} />
		</>
	)
})

export default DashboardPage
