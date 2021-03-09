rsync -a /home/runner/work/vitaminair.org/vitaminair.org/server/* ubuntu@ec2-13-229-154-169.ap-southeast-1.compute.amazonaws.com:/var/www/demo.vitaminair.org/server \
&& rsync -a /home/runner/work/vitaminair.org/vitaminair.org/client/build/* ubuntu@ec2-13-229-154-169.ap-southeast-1.compute.amazonaws.com:/var/www/demo.vitaminair.org/client/public \
&& rsync -a /home/runner/work/vitaminair.org/vitaminair.org/dashboard/build/* ubuntu@ec2-13-229-154-169.ap-southeast-1.compute.amazonaws.com:/var/www/demo.vitaminair.org/dashboard/public \
&& ssh ubuntu@ec2-13-229-154-169.ap-southeast-1.compute.amazonaws.com "pm2 restart backend.vitaminair.com && pm2 restart dashboard.vitaminair.com && pm2 restart vitaminair.com && exit" \
&& echo "The Production deploy completed."