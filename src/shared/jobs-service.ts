/**
 * Jobs Service API Types
 * 
 * Contains type definitions for the Jobs service API endpoints.
 * These types define the contracts between the Jobs service and other services.
 */

/**
 * Job Types API
 */
export namespace JobTypes {
  export interface Response {
    types: string[];
    metadata: Record<string, {
      description?: string;
      tags?: string[];
      type?: "mechanical" | "cognitive";
      composable?: boolean;
    }>;
  }
}

/**
 * Job Status Type
 */
export type JobStatus = 'pending' | 'in_progress' | 'completed' | 'failed' | 'canceled';

/**
 * Job Priority Type
 */
export type JobPriority = 'high' | 'default' | 'low';

/**
 * Job Entity
 */
export interface Job {
  id: string;
  type: string;
  params: any;
  status: JobStatus;
  priority: JobPriority;
  origin: string | null;
  tags: string[] | null;
  max_retries: number;
  retries: number;
  error: string | null;
  result: any | null;
  created_at: string;
  updated_at: string;
  scheduled_for: string | null;
  started_at: string | null;
  completed_at: string | null;
}

/**
 * Create Job API
 */
export namespace CreateJob {
  export interface Request {
    type: string;
    params: any;
    priority?: JobPriority;
    origin?: string;
    tags?: string[];
    max_retries?: number;
  }

  export interface Response {
    job: Job;
  }

  export interface Error {
    error: string;
    availableTypes?: string[];
  }
}

/**
 * Get Job API
 */
export namespace GetJob {
  export interface Response {
    job: Job;
  }

  export interface Error {
    error: string;
  }
}

/**
 * List Jobs API
 */
export namespace ListJobs {
  export interface Request {
    status?: JobStatus;
    type?: string;
    limit?: number;
  }

  export interface Response {
    jobs: Job[];
  }

  export interface Error {
    error: string;
  }
}

/**
 * Cancel Job API
 */
export namespace CancelJob {
  export interface Response {
    job: Job;
  }

  export interface Error {
    error: string;
  }
}

/**
 * Update Job API
 */
export namespace UpdateJob {
  export interface Request {
    status: 'completed' | 'failed';
    result?: any;
    error?: string;
  }

  export interface Response {
    job: Job;
  }

  export interface Error {
    error: string;
  }
}

/**
 * Health Check API
 */
export namespace HealthCheck {
  export interface Response {
    status: string;
    timestamp: string;
  }
}

/**
 * Job Handler Context and Definition 
 * (for services implementing job handlers)
 */
export interface JobContext {
  jobId: string;
  logger?: (...args: any[]) => void;
}

export interface JobHandler {
  name: string;
  run: (params: any, ctx: JobContext) => Promise<any>;
  validate?: (params: any) => void;
  metadata?: {
    description?: string;
    tags?: string[];
    type?: "mechanical" | "cognitive";
    composable?: boolean;
  };
} 