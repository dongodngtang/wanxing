import './rem';

// 先在这初始化, 到时候需要减去服务器与本地的时间差
Date._now = Date.now;