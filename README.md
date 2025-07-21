# sorenmoha.com - Personal Website Stack 

This repository powers [sorenmoha.com](https://sorenmoha.com), my personal resume website deployed using a very simple stack (AWS + CloudFlare).

## Stack Overview

### EC2 Instance (Amazon Linux 2023)
- Hosted on an AWS EC2 instance (t2.micro)
- OS: Amazon Linux 2023.
- OS level optimizations and rate limiting performed to allow optimal performance using 1 vCPU / 1GB RAM. 

### NGINX
- Primary web server.
- Configured with:
  - HTTPS via Let's Encrypt certificates.
  - Global and local NGINX rate limiting for basic DDoS protection and to protect CPU saturation.

### SSL (Let's Encrypt)
- Free SSL certificates are issued via Certbot.
- Auto-renewed every 60 days.
- HTTP requests are redirected to HTTPS.

### Cloudflare
- Serves as a reverse proxy.
- Handles:
  - DNS resolution.
  - DDoS protection.
  - Caching and performance optimization.
- Hides the public IP of the EC2 instance.

### Deployment
- Performed globally via 'deploy'.
- Script is at `/usr/local/bin/deploy`
  
  #!/bin/bash
  echo "🔄 Removing old files from /usr/share/nginx/html..."
  sudo rm -rf /usr/share/nginx/html/*
  echo "📁 Copying new files from dist to /usr/share/nginx/html..."
  sudo cp -r dist/* /usr/share/nginx/html/
  echo "✅ Deployment complete!"

### TODO
Introduce an Application Load Balancer (ALB) in front of the EC2 instance to enable horizontal scalability. The load balancer would distribute incoming traffic across multiple EC2 instances registered in a target group. This provides:

    - Traffic handling across multiple backend instances
    - Health checks to remove failed instances from rotation automatically
    - Centralized TLS termination at the load balancer level (offloading decryption from NGINX)

While this would further decouple compute from traffic management, the added cost makes it an impractical choice for a low-traffic personal website. If the system is oversaturated (most likely CPU bound, due to burst credits), upgrading the instance type is the best solution. 
