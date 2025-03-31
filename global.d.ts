interface Window {
    amplify_outputs?: {
      auth: {
        user_pool_id: string;
        user_pool_client_id: string;
        aws_region: string;
        oauth: {
          domain: string;
          scope: string[];
          redirectSignIn: string[];
          redirectSignOut: string[];
          responseType: string;
        };
      };
      [key: string]: any;
    };
  }