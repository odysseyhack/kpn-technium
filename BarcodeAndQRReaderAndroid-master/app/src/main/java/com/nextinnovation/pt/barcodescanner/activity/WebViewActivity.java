package com.nextinnovation.pt.barcodescanner.activity;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.StrictMode;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;
import com.nextinnovation.pt.barcodescanner.R;
import com.nextinnovation.pt.barcodescanner.utils.Utils;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import android.graphics.Color;

public class WebViewActivity extends AppCompatActivity {
    Button btnRetry;
    String barCode = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_view);
        loadWebView("123");
        /*btnRetry = findViewById(R.id.btnRetry);
        loadAdd();

        Intent intent = getIntent();
        if (intent.getExtras() != null) {
            barCode = intent.getStringExtra("product_id");
            loadWebView(barCode);
        }

        btnRetry.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                loadWebView(barCode);
            }
        });*/

    }

    private void loadAdd() {
        AdView mAdView = findViewById(R.id.adView);
        AdRequest adRequest = new AdRequest.Builder().build();
        mAdView.loadAd(adRequest);

    }


    private void loadWebView(String barCode) {
        Log.d("WebViewActivity", barCode);
        if (Utils.isNetworkAvailable(this)) {
           // btnRetry.setVisibility(View.INVISIBLE);
            WebView myWebView = findViewById(R.id.google_webview);
            myWebView.setWebViewClient(new WebViewClient());
            myWebView.getSettings().setJavaScriptEnabled(true);

            if (Utils.isValidURL(barCode)) {
                myWebView.loadUrl(barCode);
            } else {
//                myWebView.loadUrl("http://smartfood.network:3000/api/queries/AllFarmProducts");
                // myWebView.loadUrl("https://www.google.com/search?q="+barCode);
                //myWebView.loadUrl("http://d846145b.ngrok.io/api/queries/AllImportRequests");
                new Thread(new Runnable() {
                    @Override
                    public void run() {
                        try {
                            // Your implementation
                            URL mUrl = new URL("http://smartfood.network:3000/api/org.smartfoodnetwork.scm.AlertSent");
                            HttpURLConnection httpConnection = (HttpURLConnection) mUrl.openConnection();
                            httpConnection.setRequestMethod("GET");
                            httpConnection.setRequestProperty("Content-length", "0");
                            httpConnection.setUseCaches(false);
                            httpConnection.setAllowUserInteraction(false);
                            httpConnection.setConnectTimeout(100000);
                            httpConnection.setReadTimeout(100000);

                            httpConnection.connect();

                            int responseCode = httpConnection.getResponseCode();
                            String JSONData = "";
                            if (responseCode == HttpURLConnection.HTTP_OK) {
                                BufferedReader br = new BufferedReader(new InputStreamReader(httpConnection.getInputStream()));
                                StringBuilder sb = new StringBuilder();
                                String line;
                                while ((line = br.readLine()) != null) {
                                    sb.append(line + "\n");
                                    JSONData = sb.toString();
                                }
                                br.close();
                            }
                            final String myJSONData = JSONData;
                            runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    try {
                                        JSONArray jsonArray = new JSONArray(myJSONData);
                                        JSONObject jsonObject = jsonArray.getJSONObject(0);
                                        //JSONObject jsonObject = new JSONObject(myJSONData);
                                        //((TextView) findViewById(R.id.detail_tv_name)).setTextColor(Color.BLUE);
                                        ((TextView) findViewById(R.id.detail_tv_name)).setText("alertSentId : " + jsonObject.getString("alertSentId"));
                                        ((TextView) findViewById(R.id.detail_tv_type)).setText("alertId : " + jsonObject.getString("alertId"));
                                        ((TextView) findViewById(R.id.detail_tv_quality)).setText("productCode : " + jsonObject.getString("productCode"));
                                        ((TextView) findViewById(R.id.detail_tv_location)).setText("deviceAddressId : " + jsonObject.getString("deviceAddressId"));
                                        ((TextView) findViewById(R.id.detail_tv_remark)).setText("deviceAddressType : " + jsonObject.getString("deviceAddressType"));
                                        ((TextView) findViewById(R.id.detail_tv_price)).setText("alertDetails : " + "This package has eggs contamination of Salmonella");
                                        ((TextView) findViewById(R.id.detail_tv_quantity)).setText("time : " + jsonObject.getString("time"));
                                    } catch (JSONException e) {
                                        e.printStackTrace();
                                    }
                                }
                            });
                        } catch (Exception ex) {
                            ex.printStackTrace();
                        }
                    }
                }).start();
            }

        } else {
            //btnRetry.setVisibility(View.VISIBLE);
            Toast.makeText(this, "No Internet Connection", Toast.LENGTH_SHORT).show();
        }


    }


}
