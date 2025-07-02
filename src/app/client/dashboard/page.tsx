"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getProject } from '@/lib/mockApi';
import { useAuth } from '@/store/auth';

export default function ClientDashboard() {
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const client = useAuth((s) => s.client);

  useEffect(() => {
    getProject().then((data) => {
      setProject(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!project) return <div className="text-gray-500">No active project.</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome, {client?.name || 'Client'}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Project</CardTitle>
          </CardHeader>
          <CardContent>{project.name}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Phase</CardTitle>
          </CardHeader>
          <CardContent>{project.phase}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Last Updated</CardTitle>
          </CardHeader>
          <CardContent>{project.lastUpdated}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Health</CardTitle>
          </CardHeader>
          <CardContent>{project.health}</CardContent>
        </Card>
      </div>
    </div>
  );
} 