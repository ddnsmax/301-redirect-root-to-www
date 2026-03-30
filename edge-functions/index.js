export async function onRequest(context) {
  try {
    let target = null;
    if (context && context.env && context.env.TARGET_URL) {
      target = context.env.TARGET_URL;
    } else if (typeof TARGET_URL !== 'undefined') {
      target = TARGET_URL;
    } else if (globalThis && globalThis.TARGET_URL) {
      target = globalThis.TARGET_URL;
    }

    if (!target) {
      return new Response('系统提示：没有读取到 TARGET_URL 环境变量。请检查 EdgeOne 后台配置，并重新部署一次！', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    const url = new URL(context.request.url);
    
    let targetStr = String(target).trim();
    if (targetStr.endsWith('/')) {
      targetStr = targetStr.slice(0, -1);
    }
    
    const finalLocation = targetStr + url.pathname + url.search;

    return new Response('', {
      status: 301,
      headers: {
        'Location': finalLocation,
        'Cache-Control': 'public, max-age=3600'
      }
    });

  } catch (error) {
    return new Response('跳转脚本运行异常: ' + (error.message || error), {
      status: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

export default onRequest;