"use client";
import { useState, useEffect } from "react";
import PendingUsers from "./PendingUsers";
import ApprovedUsers from "./ApprovedUsers";
import RejectedUsers from "./RejectedUsers";
import { useUserRole } from "@/lib/UseUserRole";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [tab, setTab] = useState("pending");
  const { loading, userRole } = useUserRole();
  const router = useRouter();

  console.log("userRole", userRole);

  useEffect(() => {
    if (!loading && (!userRole || userRole !== "Moderator")) {
      //   router.push("/");
    }
  }, [loading, userRole, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderTabContent = () => {
    switch (tab) {
      case "pending":
        return <PendingUsers />;
      case "approved":
        return <ApprovedUsers />;
      case "rejected":
        return <RejectedUsers />;
      default:
        return <PendingUsers />;
    }
  };
  return (
    <div className="  min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl mb-6">Admin Dashboard</h1>
        <div className="flex mb-4">
          <button
            className={`mr-4 px-3 py-2 ${
              tab === "pending" ? "bg-black text-white" : ""
            }`}
            onClick={() => setTab("pending")}
          >
            Pending Users
          </button>
          <button
            className={`mr-4 px-3 py-2 ${
              tab === "approved" ? "bg-black text-white" : ""
            }`}
            onClick={() => setTab("approved")}
          >
            Approved Users
          </button>
          <button
            className={`px-3 py-2 ${
              tab === "rejected" ? "bg-black text-white" : ""
            }`}
            onClick={() => setTab("rejected")}
          >
            Rejected Users
          </button>
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;
