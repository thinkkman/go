/* ===================================================================
   CPABuild/Adbluemedia Content Locker — PROFESSIONAL CUSTOMIZER
   Warm friendly design • Anti-uBlock/AdBlock • Universal CPA angle
   ===================================================================
   USAGE:
   1. Adbluemedia → Content Lockers → Edit your locker
   2. F12 → Console → Paste ENTIRE script → Enter
   3. Preview transforms live — tweak anything — click SAVE
   =================================================================== */

(function() {
  'use strict';

  const log = (m, c) => console.log('%c' + m, 'color:' + (c || '#888') + ';');

  log('╔══════════════════════════════════════╗', '#ff6b5e');
  log('║  🎨 CPABUILD PRO CUSTOMIZER         ║', '#ff6b5e');
  log('╚══════════════════════════════════════╝', '#ff6b5e');
  log('');

  // ═══════════════════════════════════════════
  // 1. OFFER CONFIG
  // ═══════════════════════════════════════════
  useLockerSettings.offers.display = '2';
  useLockerSettings.offers['min-offers'] = '1';
  useLockerSettings.offers['min-payout'] = '1';
  useLockerSettings.offers['on-complete'] = 'redirect';
  useLockerSettings.offers['redirect-url'] = 'http://cpabuild.com/public/redirect.php?lead_id=%lead_id%';
  useLockerSettings.offers['show-tooltips'] = 'disabled';

  // ═══════════════════════════════════════════
  // 2. TEXT — Universal, friendly, zero adblock triggers
  // ═══════════════════════════════════════════
  // ═══════════════════════════════════════════════
  // TEXT — Persuasive CPA copy. Psychology:
  //   "One last step!" = anticipation + finality. Universal.
  //   Subtitle = clear CTA, low effort framing, no escape hatch wording.
  //   Footer = reassurance, quick resolution implied.
  //   Zero adblock trigger words in all text.
  // ═══════════════════════════════════════════════
  useLockerSettings.text.header = 'One last step!';
  useLockerSettings.text['human-verification'] = 'Continue';
  useLockerSettings.text['body-top'] = 'Complete one quick action below to continue. Takes just a sec!';
  useLockerSettings.text['body-bottom'] = 'One sec%dots%';
  useLockerSettings.text.footer = 'You\'ll be right through!';

  // ═══════════════════════════════════════════
  // 3. SETTINGS
  // ═══════════════════════════════════════════
  useLockerSettings.other['human-verification'] = 'disabled';
  useLockerSettings.other['disable-right-click'] = 'enabled';
  useLockerSettings.other['esc-key-close'] = 'disabled';
  useLockerSettings.other['alert-before-leaving'] = 'enabled';

  // ═══════════════════════════════════════════
  // 4. VISUAL SETTINGS — Desktop
  // ═══════════════════════════════════════════
  var pc = useLockerSettings.css.pc;

  // Overlay
  pc.page.background.color = '#fff5f0';
  pc.page.opacity = '94';

  // Card
  pc.locker['border-radius'] = '22';
  pc.locker['box-shadow'] = '#e0d8d2';
  pc.locker.font = 'Fredoka, Nunito, system-ui, sans-serif';
  pc.locker.width = '410';

  // Header — bolder, bigger: commands attention
  pc.header.background.color = '#ffffff';
  pc.header['border-color'] = '#ffffff';
  pc.header['border-box-shadow'] = 'transparent';
  pc.header['font-align'] = 'center';
  pc.header['font-color'] = '#2d2d33';
  pc.header['font-size'] = '22';
  pc.header['font-weight'] = 'bold';
  pc.header['padding-top'] = '32';
  pc.header['padding-bottom'] = '4';
  pc.header.display = 'block';

  // Body
  pc.body.background.color = '#ffffff';

  // Subtitle — heavier weight so the CTA lands
  pc['body-offers']['text-top-align'] = 'center';
  pc['body-offers']['text-top-color'] = '#6e6e78';
  pc['body-offers']['text-top-size'] = '14';
  pc['body-offers']['text-top-weight'] = '600';
  pc['body-offers']['text-top-padding-top'] = '10';
  pc['body-offers']['text-top-padding-bottom'] = '22';
  pc['body-offers']['text-top-shadow'] = 'transparent';

  // Waiting
  pc['body-offers']['text-bottom-align'] = 'center';
  pc['body-offers']['text-bottom-color'] = '#ff6b5e';
  pc['body-offers']['text-bottom-size'] = '13';
  pc['body-offers']['text-bottom-weight'] = '600';
  pc['body-offers']['text-bottom-padding-top'] = '16';
  pc['body-offers']['text-bottom-padding-bottom'] = '20';
  pc['body-offers']['text-bottom-shadow'] = 'transparent';

  // Offer cards
  pc['body-offers-list'].background.color = '#fafaf7';
  pc['body-offers-list']['background-hover'].color = '#fff0ec';
  pc['body-offers-list']['border-color'] = '#e8e4e0';
  pc['body-offers-list']['border-color-hover'] = '#ff6b5e';
  pc['body-offers-list']['border-radius'] = '14';
  pc['body-offers-list']['border-width'] = '1';
  pc['body-offers-list']['font-color'] = '#2d2d33';
  pc['body-offers-list']['font-color-hover'] = '#e85d52';
  pc['body-offers-list']['font-size'] = '14';
  pc['body-offers-list']['font-weight'] = '500';
  pc['body-offers-list']['margin-bottom'] = '10';
  pc['body-offers-list']['margin-top'] = '0';
  pc['body-offers-list']['padding-top'] = '14';
  pc['body-offers-list']['padding-bottom'] = '14';
  pc['body-offers-list']['text-align'] = 'center';
  pc['body-offers-list'].width = '100';
  pc['body-offers-list'].align = 'center';

  // Footer
  pc.footer.background.color = '#ffffff';
  pc.footer['border-color'] = '#ffffff';
  pc.footer['border-box-shadow'] = 'transparent';
  pc.footer['font-align'] = 'center';
  pc.footer['font-color'] = '#b8b4b0';
  pc.footer['font-size'] = '11';
  pc.footer['font-weight'] = 'normal';
  pc.footer['padding-top'] = '4';
  pc.footer['padding-bottom'] = '28';
  pc.footer.display = 'block';

  // ═══════════════════════════════════════════
  // 5. VISUAL SETTINGS — Mobile
  // ═══════════════════════════════════════════
  var ph = useLockerSettings.css.phone;
  ph['body-offers-list'].width = '100';
  ph['body-offers-list']['font-size'] = '13';
  ph['body-offers-list']['padding-top'] = '13';
  ph['body-offers-list']['padding-bottom'] = '13';
  ph['body-offers-list']['margin-bottom'] = '8';
  ph['body-offers-list']['border-radius'] = '12';
  ph['body-offers']['text-top-size'] = '12';
  ph['body-offers']['text-top-padding-top'] = '8';
  ph['body-offers']['text-top-padding-bottom'] = '20';
  ph['body-offers']['text-bottom-size'] = '12';
  ph['body-offers']['text-bottom-padding-top'] = '12';
  ph['body-offers']['text-bottom-padding-bottom'] = '16';
  ph.header['font-size'] = '18';
  ph.header['padding-top'] = '28';
  ph.header['padding-bottom'] = '2';
  ph.footer['font-size'] = '10';
  ph.footer['padding-bottom'] = '22';

  log('  ✓ Settings: 2 offers, warm peach theme, Fredoka font', '#22c55e');

  // ═══════════════════════════════════════════
  // 6. CUSTOM CSS — Full override
  // ═══════════════════════════════════════════
  useLockerSettings['css-custom'] = [
    '@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap");',

    '/* ============================================',
    '   Warm Friendly Locker — Design System',
    '   bg:#fff5f0 | accent:#ff6b5e | text:#2d2d33',
    '   ============================================ */',

    '/* -- Overlay: warm soft blur -- */',
    '#my-locker-background{',
    'background:rgba(255,245,240,0.94)!important;',
    'backdrop-filter:blur(16px) saturate(140%)!important;',
    '-webkit-backdrop-filter:blur(16px) saturate(140%)!important;',
    'transition:opacity 0.4s ease!important;',
    '}',

    '/* -- Card: floating white, soft shadow -- */',
    '#my-locker{',
    'width:410px!important;max-width:94vw!important;',
    'border-radius:22px!important;overflow:hidden!important;',
    'font-family:"Fredoka","Nunito",system-ui,-apple-system,sans-serif!important;',
    'background:#fff!important;',
    'box-shadow:',
    '0 0 0 1px rgba(0,0,0,0.03),',
    '0 2px 4px rgba(0,0,0,0.02),',
    '0 12px 32px rgba(0,0,0,0.05),',
    '0 24px 64px rgba(0,0,0,0.04)!important;',
    'animation:lockerFloatIn 0.5s cubic-bezier(0.16,1,0.3,1)!important;',
    'position:relative!important;',
    '}',
    '@keyframes lockerFloatIn{',
    '0%{opacity:0;transform:translateY(24px) scale(0.96)}',
    '100%{opacity:1;transform:translateY(0) scale(1)}',
    '}',

    '/* -- Coral accent dot (signature detail) -- */',
    '#my-locker::before{',
    'content:""!important;display:block!important;',
    'height:4px!important;width:48px!important;',
    'background:#ff6b5e!important;',
    'border-radius:0 0 100px 100px!important;',
    'margin:0 auto!important;',
    'position:relative!important;z-index:2!important;',
    '}',

    '/* -- Header -- */',
    '#my-locker-top{',
    'padding:28px 28px 4px!important;',
    'border:none!important;background:#fff!important;',
    '}',
    '#my-locker-top span{',
    'font-family:"Fredoka","Nunito",system-ui,sans-serif!important;',
    'font-size:22px!important;font-weight:700!important;',
    'letter-spacing:-0.2px!important;color:#2d2d33!important;',
    '}',

    '/* -- Body -- */',
    '#my-locker-body{background:#fff!important;padding:0!important;}',

    '/* -- Subtitle — bold CTA ---- */',
    '.my-locker-body-text-top{',
    'padding:12px 28px 22px!important;',
    'font-family:system-ui,-apple-system,sans-serif!important;',
    'font-size:14px!important;font-weight:600!important;',
    'color:#6e6e78!important;line-height:1.5!important;',
    'text-align:center!important;max-width:320px!important;',
    'margin:0 auto!important;',
    '}',

    '/* -- Hide HV button -- */',
    '#my-locker-body-human-verification{display:none!important;}',

    '/* -- Offer list -- */',
    '#my-locker-body-offers-list{',
    'display:flex!important;flex-direction:column!important;',
    'align-items:center!important;gap:10px!important;',
    'padding:0 28px!important;',
    '}',

    '/* -- Offer cards -- */',
    '#my-locker-body-offers-list>*{',
    'width:100%!important;max-width:100%!important;',
    'padding:14px 20px!important;',
    'background:#fafaf7!important;',
    'border:1px solid #e8e4e0!important;',
    'border-radius:14px!important;',
    'font-family:system-ui,-apple-system,sans-serif!important;',
    'font-size:14px!important;font-weight:500!important;',
    'color:#2d2d33!important;text-align:center!important;',
    'cursor:pointer!important;margin:0!important;',
    'transition:all 0.22s cubic-bezier(0.4,0,0.2,1)!important;',
    'position:relative!important;overflow:hidden!important;',
    '}',

    '/* Card hover: warm coral glow */',
    '#my-locker-body-offers-list>*:hover{',
    'background:#fff0ec!important;',
    'border-color:#ff6b5e!important;',
    'color:#e85d52!important;',
    'transform:translateY(-2px)!important;',
    'box-shadow:0 6px 20px rgba(255,107,94,0.12)!important;',
    '}',

    '/* Card active press */',
    '#my-locker-body-offers-list>*:active{',
    'transform:translateY(0) scale(0.98)!important;',
    'transition:all 0.06s ease!important;',
    '}',

    '/* First card subtle highlight */',
    '#my-locker-body-offers-list>*:first-child{',
    'background:#fff8f6!important;',
    'border-color:#f0dbd4!important;',
    '}',
    '#my-locker-body-offers-list>*:first-child:hover{',
    'background:#fff0ec!important;',
    'border-color:#ff6b5e!important;',
    '}',

    '/* -- Waiting text -- */',
    '.my-locker-body-text-bottom{',
    'padding:18px 28px 20px!important;',
    'font-family:system-ui,-apple-system,sans-serif!important;',
    'font-size:13px!important;font-weight:600!important;',
    'color:#ff6b5e!important;text-align:center!important;',
    'animation:gentlePulse 2.2s ease-in-out infinite!important;',
    '}',
    '@keyframes gentlePulse{',
    '0%,100%{opacity:1}',
    '50%{opacity:0.5}',
    '}',

    '/* -- Footer -- */',
    '#my-locker-bottom{',
    'padding:6px 28px 28px!important;',
    'border:none!important;background:#fff!important;',
    '}',
    '#my-locker-bottom span{',
    'font-family:system-ui,-apple-system,sans-serif!important;',
    'font-size:11px!important;font-weight:400!important;',
    'color:#b8b4b0!important;',
    '}',

    '/* -- Mobile -- */',
    '@media(max-width:500px){',
    '#my-locker{border-radius:18px!important;max-width:96vw!important;}',
    '#my-locker::before{width:40px!important;height:3px!important;}',
    '#my-locker-top{padding:24px 22px 2px!important;}',
    '#my-locker-top span{font-size:18px!important;}',
    '.my-locker-body-text-top{padding:10px 22px 20px!important;font-size:12px!important;max-width:270px!important;}',
    '#my-locker-body-offers-list{padding:0 22px!important;gap:8px!important;}',
    '#my-locker-body-offers-list>*{padding:13px 16px!important;font-size:13px!important;border-radius:12px!important;}',
    '.my-locker-body-text-bottom{padding:14px 22px 16px!important;font-size:12px!important;}',
    '#my-locker-bottom{padding:4px 22px 22px!important;}',
    '#my-locker-bottom span{font-size:10px!important;}',
    '}'
  ].join('\n');

  log('  ✓ Custom CSS: warm peach, coral accent, rounded type', '#22c55e');

  // ═══════════════════════════════════════════
  // 7. CUSTOM JS — Anti-adblock detection only
  // ═══════════════════════════════════════════
  useLockerSettings['javascript-custom'] = [
    '/* AdBlock detection — friendly fallback */',
    '(function(){',
    '"use strict";',
    'setTimeout(function(){',
    'var list=document.getElementById("my-locker-body-offers-list");',
    'if(list&&list.children.length===0){',
    'var msg=document.querySelector(".my-locker-body-text-top");',
    'if(msg){',
    'msg.textContent="Hmm, something\'s not loading. Try refreshing or switching browsers?";',
    'msg.style.color="#e8903a";',
    '}',
    'if(list)list.style.display="none";',
    '}',
    '},4000);',
    '})();'
  ].join('\n');

  log('  ✓ Anti-AdBlock JS: detection + friendly error message', '#22c55e');

  // ═══════════════════════════════════════════
  // 8. LIVE PREVIEW — Direct DOM transform
  // ═══════════════════════════════════════════

  function applyPreviewStyles() {
    var s = document.getElementById('cpabuild-preview');
    if (!s) { s = document.createElement('style'); s.id = 'cpabuild-preview'; document.head.appendChild(s); }
    s.textContent = [
      '@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap");',

      '#my-locker-background{',
      'background:rgba(255,245,240,0.94)!important;',
      'backdrop-filter:blur(16px) saturate(140%)!important;',
      '-webkit-backdrop-filter:blur(16px) saturate(140%)!important;}',

      '#my-locker{',
      'width:410px!important;max-width:94vw!important;',
      'border-radius:22px!important;overflow:hidden!important;',
      'font-family:"Fredoka","Nunito",system-ui,-apple-system,sans-serif!important;',
      'background:#fff!important;position:relative!important;',
      'box-shadow:0 0 0 1px rgba(0,0,0,0.03),0 2px 4px rgba(0,0,0,0.02),0 12px 32px rgba(0,0,0,0.05),0 24px 64px rgba(0,0,0,0.04)!important;',
      'animation:cpFloatIn 0.5s cubic-bezier(0.16,1,0.3,1)!important;}',
      '@keyframes cpFloatIn{0%{opacity:0;transform:translateY(24px) scale(0.96)}100%{opacity:1;transform:translateY(0) scale(1)}}',

      '#my-locker::before{',
      'content:""!important;display:block!important;',
      'height:4px!important;width:48px!important;',
      'background:#ff6b5e!important;',
      'border-radius:0 0 100px 100px!important;',
      'margin:0 auto!important;',
      'position:relative!important;z-index:2!important;}',

      '#my-locker-top{padding:28px 28px 4px!important;border:none!important;background:#fff!important;}',
      '#my-locker-top span{font-family:"Fredoka","Nunito",system-ui,sans-serif!important;font-size:22px!important;font-weight:700!important;letter-spacing:-0.2px!important;color:#2d2d33!important;}',

      '#my-locker-body{background:#fff!important;padding:0!important;}',

      '.my-locker-body-text-top{padding:12px 28px 22px!important;font-family:system-ui,-apple-system,sans-serif!important;font-size:14px!important;font-weight:600!important;color:#6e6e78!important;line-height:1.5!important;text-align:center!important;max-width:320px!important;margin:0 auto!important;}',

      '#my-locker-body-human-verification{display:none!important;}',

      '#my-locker-body-offers-list{display:flex!important;flex-direction:column!important;align-items:center!important;gap:10px!important;padding:0 28px!important;}',

      '#my-locker-body-offers-list>*{width:100%!important;max-width:100%!important;padding:14px 20px!important;background:#fafaf7!important;border:1px solid #e8e4e0!important;border-radius:14px!important;font-family:system-ui,-apple-system,sans-serif!important;font-size:14px!important;font-weight:500!important;color:#2d2d33!important;text-align:center!important;cursor:pointer!important;margin:0!important;transition:all 0.22s cubic-bezier(0.4,0,0.2,1)!important;}',

      '#my-locker-body-offers-list>*:hover{background:#fff0ec!important;border-color:#ff6b5e!important;color:#e85d52!important;transform:translateY(-2px)!important;box-shadow:0 6px 20px rgba(255,107,94,0.12)!important;}',

      '#my-locker-body-offers-list>*:first-child{background:#fff8f6!important;border-color:#f0dbd4!important;}',
      '#my-locker-body-offers-list>*:first-child:hover{background:#fff0ec!important;border-color:#ff6b5e!important;}',

      '.my-locker-body-text-bottom{padding:18px 28px 20px!important;font-family:system-ui,-apple-system,sans-serif!important;font-size:13px!important;font-weight:600!important;color:#ff6b5e!important;text-align:center!important;animation:cpGentle 2.2s ease-in-out infinite!important;}',
      '@keyframes cpGentle{0%,100%{opacity:1}50%{opacity:0.5}}',

      '#my-locker-bottom{padding:6px 28px 28px!important;border:none!important;background:#fff!important;}',
      '#my-locker-bottom span{font-family:system-ui,-apple-system,sans-serif!important;font-size:11px!important;font-weight:400!important;color:#b8b4b0!important;}',

      '@media(max-width:500px){',
      '#my-locker{border-radius:18px!important;max-width:96vw!important;}',
      '#my-locker::before{width:40px!important;height:3px!important;}',
      '#my-locker-top{padding:24px 22px 2px!important;}',
      '#my-locker-top span{font-size:18px!important;}',
      '.my-locker-body-text-top{padding:10px 22px 20px!important;font-size:12px!important;max-width:270px!important;}',
      '#my-locker-body-offers-list{padding:0 22px!important;gap:8px!important;}',
      '#my-locker-body-offers-list>*{padding:13px 16px!important;font-size:13px!important;border-radius:12px!important;}',
      '.my-locker-body-text-bottom{padding:14px 22px 16px!important;font-size:12px!important;}',
      '#my-locker-bottom{padding:4px 22px 22px!important;}',
      '#my-locker-bottom span{font-size:10px!important;}',
      '}'
    ].join('\n');
  }

  function updateLivePreview() {
    applyPreviewStyles();

    // Update text content
    var el;
    el = document.querySelector('#my-locker-top span');
    if (el) el.textContent = 'One last step!';

    el = document.querySelector('.my-locker-body-text-top');
    if (el) el.textContent = 'Complete one quick action below to continue. Takes just a sec!';

    el = document.querySelector('.my-locker-body-text-bottom');
    if (el) el.textContent = 'One sec...';

    el = document.querySelector('#my-locker-bottom span');
    if (el) el.textContent = 'You\'ll be right through!';

    // Hide HV button
    el = document.querySelector('#my-locker-body-human-verification');
    if (el) el.style.display = 'none';

    // Show only first 2 offers
    var offers = document.querySelectorAll('#my-locker-body-offers-list > *');
    offers.forEach(function(o, i) { o.style.display = i < 2 ? '' : 'none'; });

    // Overlay
    var bg = document.querySelector('#my-locker-background');
    if (bg) {
      bg.style.backdropFilter = 'blur(16px) saturate(140%)';
      bg.style.webkitBackdropFilter = 'blur(16px) saturate(140%)';
      bg.style.background = 'rgba(255,245,240,0.94)';
    }

    // Coral accent dot at top of card
    var locker = document.querySelector('#my-locker');
    if (locker && !locker.querySelector('.cp-accent-dot')) {
      locker.style.position = 'relative';
      var dot = document.createElement('div');
      dot.className = 'cp-accent-dot';
      dot.style.cssText = 'height:4px;width:48px;background:#ff6b5e;border-radius:0 0 100px 100px;margin:0 auto;position:relative;z-index:2;';
      locker.insertBefore(dot, locker.firstChild);
    }
  }

  // Apply preview immediately + retry as CPABuild re-renders
  updateLivePreview();
  setTimeout(updateLivePreview, 150);
  setTimeout(updateLivePreview, 500);
  setTimeout(updateLivePreview, 1200);

  // Watch for DOM changes
  var observer = new MutationObserver(function() { updateLivePreview(); });
  var target = document.querySelector('#my-locker-body-offers-list');
  if (target) observer.observe(target, { childList: true, subtree: true, characterData: true });

  // Trigger CPABuild's own refresh
  if (typeof refreshLockerPreview === 'function') {
    refreshLockerPreview();
    setTimeout(updateLivePreview, 250);
  }

  // Update form fields
  setTimeout(function() {
    var di = document.querySelector('input[data-key="display"]');
    var mi = document.querySelector('input[data-key="min-offers"]');
    if (di) { di.value = 2; $(di).trigger('change'); }
    if (mi) { mi.value = 1; $(mi).trigger('change'); }
  }, 500);

  // ═══════════════════════════════════════════
  // REPORT
  // ═══════════════════════════════════════════
  console.log('');
  console.log('%c  ✨  READY — Click SAVE  ✨',
    'background:#ff6b5e;color:#fff;font-size:15px;font-weight:600;' +
    'padding:10px 20px;border-radius:12px;');
  console.log('');
  console.log('%cDesign system applied:%c', 'font-weight:700;color:#2d2d33;', 'color:#8e8e96;');
  console.log('  %c▸%c Warm peach overlay (#fff5f0) + white card',
    'color:#ff6b5e;','color:#666;');
  console.log('  %c▸%c Coral accent (#ff6b5e) — warm, friendly, distinctive',
    'color:#ff6b5e;','color:#666;');
  console.log('  %c▸%c Fredoka display font — rounded, approachable',
    'color:#ff6b5e;','color:#666;');
  console.log('  %c▸%c 22px card radius, 14px card radius, soft shadows',
    'color:#ff6b5e;','color:#666;');
  console.log('  %c▸%c Coral dot signature detail at card top',
    'color:#ff6b5e;','color:#666;');
  console.log('  %c▸%c First card subtly highlighted (warm tint)',
    'color:#ff6b5e;','color:#666;');
  console.log('');
  console.log('%cText:%c', 'font-weight:700;color:#2d2d33;', 'color:#8e8e96;');
  console.log('  %c▸%c "One last step!" — header (bold, anticipation)',
    'color:#ff6b5e;','color:#666;');
  console.log('  %c▸%c "Complete one quick action below to continue. Takes just a sec!"',
    'color:#ff6b5e;','color:#666;');
  console.log('  %c▸%c "One sec..." — waiting state',
    'color:#ff6b5e;','color:#666;');
  console.log('  %c▸%c "You\'ll be right through!" — reassurance footer',
    'color:#ff6b5e;','color:#666;');
  console.log('  %c▸%c Offer text: LEFT AS-IS (CPABuild handles that)',
    'color:#22c55e;','color:#666;');
  console.log('');
  console.log('%cAnti-AdBlock:%c', 'font-weight:700;color:#2d2d33;', 'color:#8e8e96;');
  console.log('  %c▸%c Zero trigger words in ALL custom text',
    'color:#22c55e;','color:#666;');
  console.log('  %c▸%c Clean CSS class names (no "ad"/"offer"/"prize")',
    'color:#22c55e;','color:#666;');
  console.log('  %c▸%c Friendly fallback if locker script blocked',
    'color:#22c55e;','color:#666;');
  console.log('');

})();
