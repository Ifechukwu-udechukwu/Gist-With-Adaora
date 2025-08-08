import { useEffect, useState } from "react";
import blogs from "../../blogs";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        blogs: 0,
        comments: 0,
        drafts: 0,
        recentBlogs: []
    });

    const dashboard_data = {
        blogs: 10,
        comments: 5,
        drafts: 0,
        recentBlogs: blogs.slice(0, 5)
    };

    const fetchDashboard = async () => {
        setDashboardData(dashboard_data);
    };

    useEffect(() => {
        fetchDashboard();
    }, []);

    return ( 
        <div className="flex-1 p-4 md:p-10 bg-black-50/50">
            <div className="flex flex-wrap gap-4">

                <div className="flex items-center gap-4 bg-pink-50 p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
                    <img src="/dashboards.png" alt="icon" className="w-8 h-8"/>
                    <div>
                        <p className="text-xl font-semibold text-black-400">
                            {dashboardData.blogs}
                        </p>
                        <p className="text-black-400 font-light">Blogs</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-pink-50 p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
                    <img src="/comment.png" alt="icon" className="w-8 h-8" />
                    <div>
                        <p className="text-xl font-semibold text-black-400">
                            {dashboardData.comments}
                        </p>
                        <p className="text-black-400 font-light">Comments</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-pink-50 p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
                    <img src="/draft.png" alt="icon" className="w-8 h-8" />
                    <div>
                        <p className="text-xl font-semibold text-black-400">
                            {dashboardData.comments}
                        </p>
                        <p className="text-black-400 font-light">Drafts</p>
                    </div>
                </div>

            </div>

            <div>
                <div className="flex items-center gap-3 m-4 mt-6 text-black-600">
                    <img src="/blog.png" alt="icon" className="w-8 h-8"/>
                    <p>Latest Blogs</p>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;
