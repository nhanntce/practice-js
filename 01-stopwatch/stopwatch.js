document.addEventListener('DOMContentLoaded', () => {
        var hours = document.getElementById('hours');
        var minutes = document.getElementById('minutes');
        var seconds = document.getElementById('seconds');
        var btnStart = document.getElementsByClassName('btn-start')[0];
        var btnStop = document.getElementsByClassName('btn-stop')[0];
        var btnReset = document.getElementsByClassName('btn-reset')[0];
        var interval;
        var checkRun = false;
        //start
        btnStart.addEventListener('click', () => {
            if (!checkRun) {
                var intHours = parseInt(hours.innerHTML);
                var intMinutes = parseInt(minutes.innerHTML);
                var intSeconds = parseInt(seconds.innerHTML);
                interval = setInterval(() => {
                    if (intSeconds < 60)
                        intSeconds++;
                    if (intSeconds >= 60) {
                        intSeconds = 0;
                        if (intMinutes < 60)
                            intMinutes++;
                        if (intMinutes >= 60) {
                            intHours++;
                            intMinutes = 0;
                        }
                    }
                    if (intHours < 10)
                        hours.innerHTML = '0' + intHours;
                    else
                        hours.innerHTML = intHours;
                    if (intMinutes < 10)
                        minutes.innerHTML = '0' + intMinutes;
                    else
                        minutes.innerHTML = intMinutes;
                    if (intSeconds < 10)
                        seconds.innerHTML = '0' + intSeconds;
                    else
                        seconds.innerHTML = intSeconds;
                    checkRun = true;
                }, 900);
            }
        });
        //end start
        // stop
        btnStop.addEventListener('click', () => {
            if (checkRun) {
                clearInterval(interval);
                checkRun = false;
            }
        });
        //end stop
        //reset
        btnReset.addEventListener('click', () => {
        	if(!checkRun) {
        		hours.innerHTML = '00';
        		minutes.innerHTML = '00';
        		seconds.innerHTML = '00';
        	}
        });
    });